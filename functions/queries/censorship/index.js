'use strict';
const http = require('http');
const AWS = require('aws-sdk');

// Use simple http client to retrieve the image data via get request
function getImage(url) {
  return new Promise((resolve, reject) => {
    const req = http.get(url.replace('https', 'http'), res => {
      let rawData = '';
      res.on('data', chunk => {
        rawData += chunk;
      });
      res.on('end', () => {
        try {
          resolve(JSON.parse(rawData));
        } catch (err) {
          reject(new Error(err));
        }
      });
    });
    req.on('error', err => {
      reject(new Error(err ?? ''));
    });
  });
}

// Calls the rekognition api to determine if content is inappropriate.
// Returns true if content should NOT be viewed by the general public
// Returns false if the content is perfectly fine.
function isContentInappropriate(image) {
  return new Promise((resolve, reject) => {
    // Initialize the Amazon Cognito credentials provider
    const rekognition = new AWS.Rekognition();
    const request = {
      "Image": {
        "Bytes": image
      },
      "MinConfidence": 60
    };
    rekognition.detectModerationLabels(request, (err, data) => {
      if (err) {
        console.log(err);
        reject(new Error(err ?? ''));
      } else {
        const isInappropContent = determineBadContent(data);
        resolve(isInappropContent);
      }
    });
  });
}

// Lets see what format the data is returned in. I know it's a list of objects with tags and confidence 
// scores but still I don't have examples to work with - seems like they should provide sample payloads.
function determineBadContent(data) {
  console.log('THIS IS WHAT IS RETURNED FROM REKOGNITION: \n' + JSON.stringify(data, null, 2));
  return data.ModerationLabels.any(x => 
      x.Name.toLowerCase().contains('nudity') || 
      x.Name.toLowerCase().contains('middle finger') || 
      x.Name.toLowerCase().contains('drug'));
}

exports.handler =  async function(event, context) {
  try {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2));
    const image = await getImage(event.images[0]);
    console.log("Media: \n" + JSON.stringify(image, null, 2));
    const contentIsInappropriate = await isContentInappropriate(image);
    if (contentIsInappropriate === true) {
      console.log("CONTENT IS NOT APPROPRIATE FOR GRANDMOTHA EYES YALL");
      // Enqueue into profanity queue
    } else {
      console.log("CONTENT IS APPROPRIATE, DISPLAY AWAY");
      // Enqueue into safe message queue
    }
  } catch (err) {
    console.log('BIG ERROR');
    console.log(err);
    return { statusCode: '500' };
  }
  
  return { statusCode: '200' };
}