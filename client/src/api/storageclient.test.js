import StorageClient from "./storageclient";

describe('Storage client tests', () => {
    const sendSpy = jest.fn();
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Get Messages should call client send method', async () => {
        const storageClient = setupClientMock([], true);
        const testReq = {
            "image": 10393782829003,
            "messageBody": "Image I Sent"
        };
        await storageClient.getMessages(testReq);
        expect(sendSpy).toHaveBeenCalledWith(testReq)
    });
    
    it('Get Messages should return the data given by the send call', async () => {
       const mockData = [{
           "messageBody": "Ipsum Salt a majoria",
           "image": "https://annandconnor2022.com"
       }, {
           "messageBody": "Till death do us part",
           "image": "https://the_morbid_side_of_wedding_culture.com"
       }];
       const storageClient = setupClientMock(mockData, true);
       const result = await storageClient.getMessages({});
       expect(sendSpy).toHaveBeenCalled();
       expect(result).toMatchObject(mockData);
    });
    
    it('Get Messages should return empty array on failure', async () => {
        const storageClient = setupClientMock([{"doesnt matter": 1}], false);
        const result = await storageClient.getMessages({});
        expect(result).toHaveLength(0);
    });

    const setupClientMock = (dataToReturn, isSuccess) => {
        if (isSuccess) {
            sendSpy.mockImplementation((req) => Promise.resolve(dataToReturn));
        } else {
            sendSpy.mockImplementation((req) => Promise.reject(dataToReturn));
        }
        const client = {
            send: sendSpy
        };
        return new StorageClient(client);
    }
})
