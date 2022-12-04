import StorageClient from "./storageclient";
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

export default class S3ClientImplementation extends StorageClient {
    constructor(region) {
        super(new S3Client({
            region: region
        }));
    }
    
    async getMessages() {
        return await super.getMessages(new ListObjectsV2Command({
            Bucket: 'wedding-day-texts-spa-test'
        }));
    }
}