import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

const S3_CLIENT = new S3Client({region: "us-east-1"});

export const GetMessages = async () => {
    try {
        return await S3_CLIENT.send(new ListObjectsV2Command({
            Bucket: process.env.IMAGE_BUCKET_NAME
        }))
    } catch (err) {
        
    }
}