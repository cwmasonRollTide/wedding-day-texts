'use strict';
const AWS = require('aws-sdk');
const fetch = require('node-fetch');

// Use simple https client to retrieve the image data via get request
function getImage(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const params = {
        method: "GET",
        headers: {"Content-Type":"image/jpeg"}
      };
      const response = await fetch(url, params);
      const blob = await response.blob();
      console.log('BLOB: \n', null, 2, JSON.stringify(blob));
      resolve(blob);
    } catch (err) {
      console.log(err);
      reject(new Error(err ?? ''))
    }
  });
}

// Calls the rekognition api to determine if content is inappropriate.
// Returns true if content should NOT be viewed by the general public
// Returns false if the content is perfectly fine.
function isContentInappropriate(imageBlob) {
  return new Promise((resolve, reject) => {
    // Initialize the Amazon Cognito credentials provider
    const rekognition = new AWS.Rekognition();
    const request = {
      "Image": {
        "Bytes": imageBlob
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
  return data?.ModerationLabels?.any(x => 
      x.Name.toLowerCase().contains('nudity') || 
      x.Name.toLowerCase().contains('middle finger') || 
      x.Name.toLowerCase().contains('drug')) ?? false;
}

exports.handler =  async function(event, context) {
  let allContentIsAppropriate = true;
  try {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2));
    event.images?.map(async (mediaUrl) => {
      const image = await getImage(new URL(mediaUrl));
      console.log("Media: \n" + JSON.stringify(image, null, 2));
      const contentIsInappropriate = await isContentInappropriate(image);
      if (contentIsInappropriate === true) {
        console.log("CONTENT IS NOT APPROPRIATE FOR GRANDMOTHA EYES YALL");
        allContentIsAppropriate = false;
        // Enqueue into profanity queue
      } else {
        console.log("CONTENT IS APPROPRIATE, DISPLAY AWAY");
        // Enqueue into safe message queue
      }
    });
    if (allContentIsAppropriate === true) {
      // Store the image file as png or jpeg, from number as the title to a txt document with the message body as the contents
      console.log('All content approp');
    }
  } catch (err) {
    console.log('BIG ERROR');
    console.log(err);
    return { statusCode: '500' };
  }
  return { statusCode: '200' };
}