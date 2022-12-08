'use strict';
const https = require('https');
const { Rekognition } = require('aws-sdk')

function getImage(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, res => {
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

function detectInnappropriateNonoContent(image) {
  return new Promise((resolve, reject) => {
    const rekognition = new Rekognition({
      region: 'us-east-2', // like us-east-1
    });
    try {
      const request = {
        "Image": {
          "Bytes": image
        },
        "MinConfidence": 60
      };
      rekognition.detectModerationLabels(request, (err, data) => {
        if (err) {
          
        } else {
          
        }
      }
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    } catch (err) {
      
    }
  })
}

exports.handler =  async function(event, context) {
  const image = await getImage(event.mediaUrl0)
  console.log("EVENT: \n" + JSON.stringify(event, null, 2))
  console.log("Media: \n" + JSON.stringify(image, null, 2))
  return { status: '200' };
}