# **Wedding Day Texts Application**

## **General Idea**
- I always thought it would be a lot of fun to develop something for the wedding. I wish I had come up with what
I wanted to do with this a lot earlier and not three weeks before, but might as well make a hackathon weekend out
of it. Happy Thanksgiving! Here's a serverless cloud application :)
- SO - Anna found this service to record people's voicemails and turn the recording into a vinyl record - which
is going to be sweet - but it got me thinking about some sort of textable phone number as well
- Why just accept text, why not have one place to aggregate peoples' pictures they take on their phones throughout 
the weekend?
- I can take in text messages with texts and pictures - run the pictures through some sort of check to
make sure they're suitable to display on the internet, then put them on a single page application that just
scrolls through whatever messages are sent to it?
- Store the images - train a data model to recognize your friends and family to make dispersing 
wedding pictures a fun little example of using one of these learning models for a legitimate purpose instead
of just for the buzzwords
- Serverless Application - so I shouldn't get charged like crazy for resources I don't use - it's a pay as you
go thing for infrastructure, but I doubt i'll get out of the free tier for December 10th.
- **I love you, Anna :)** _Can't wait to marry you and go halvies on that baby_
- [Architecture](./infrastructure/WeddingDayTexts.drawio.pdf)

## **Repo Structure**
- client
  - Front-end React application to be deployed in an S3 bucket with Cloudfront distribution
  to view the pictures messaged to the application
- functions
  - Lambda functions written in nodeJs necessary to check the  image for profanity, then archive 
  the image in an s3 bucket if it is not profane, and discarded into a dynamoDB table if it is.
- infrastructure
  - Home of the cloudformation yaml, and the config files for each environment. For now, probably just 
  one

## **Tech Stack**

### Jest
- Unit testing nodeJS code.
- Only testing library for javascript I'm familiar with, not taking a stand here or anything there could be
  better options
- [Getting Started with Jest Testing](https://jestjs.io/docs/getting-started)

### NodeJS
- Serverless lambda functions written in NodeJS
- Lightweight, quick function start times, familiar with base language.
- But admittedly haven't touched node for a long time so good refresher
- [NodeJS Download](https://nodejs.org/en/download/)

### AWS
- In case we get literally millions of wedding guests out of nowhere, have to be able
  to handle random spikes in traffic right??
- Serverless architecture in mind - text message goes to SNS topics that trigger lambda functions.
- Will store the legitimate texts and pictures in S3 Bucket
- Store rejected messages in DynamoDB instance
- [Cloud Computing with Overlord Bezos](https://aws.amazon.com/what-is-aws/?trk=be77f66f-da84-4f51-9483-df3858616660&sc_channel=ps&s_kwcid=AL!4422!10!71056092058919!71056537922248&s_kwcid=AL!4422!10!71056092058919!71056537922248&ef_id=2448221519321b9daf7f41954457af5c:G:s)

### React
- Started off an example React App distributed from an S3 Bucket Build
- [React Home Page](https://reactjs.org/)

### Material UI
- way to keep components on the front end application looking similar
- not taking a stand here, just what I know how to use already
- easy to use theming for light and dark modes
- [MUI Docs](https://mui.com/material-ui/getting-started/overview/)

## **Integrations**
| Twilio      ||
|-------------|--------------------------------------------|
| Link        | [Twilio Developer Console](https://console.twilio.com/) |
 | Description | Third party service that makes managing virtual phone numbers and integrating them into application worfklows easy for devs |

## **Peripheral Services Used**
| Trello      ||
|-------------|---------------------------------------------------------------------------------------|
| Link        | [Wedding Day Texts Trello Board](https://trello.com/b/cbLr16G8/wedding-day-texts)     |
| Description | Plan necessary activities to complete the project and track where work is accordingly |

| Timeular    ||
|-------------|---------------------------------------------------------------------------------------|
| Link        | [Timeular Homepage](https://timeular.com/)     |
| Description | Use physical diamond shaped object thingy that I put certain sides up that correspond to activities |

| Rider IDE   ||
|-------------|---------------------------------------------------------------------------------------|
| Link        | [Rider IDE Download](https://www.jetbrains.com/rider/download/#section=windows)     |
| Description | Jetbrains IDE I highly recommend usually more for .NET work though. I just like it and am used to it |

| Cmder       ||
|-------------|---------------------------------------------------------------------------------------|
| Link        | [Cmder Download](https://cmder.app/)     |
| Description | Command line emulator: can have multiple directories open in a single pane - configurable terminal emulator|


## Errands
### _Thought of you today_
### _As I went about these tasks_
### _That I do to bring you joy,_
### _I love that smile when you come back._
### _If need be, I will work on,_
### _Into the night if that's required._
### _I'd do anything for you,_
### _You are so worth it to be tired._
