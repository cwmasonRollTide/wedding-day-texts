export default class StorageClient {
    constructor(client) {
        this.storageClient = client;
    }
    async getMessages(request) {
        try {
            return await this.storageClient.send(request);
        } catch (err) {
            console.error(err);
            return [];
        }
    };
}