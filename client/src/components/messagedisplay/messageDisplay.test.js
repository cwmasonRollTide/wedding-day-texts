import MessageDisplay from "./messageDisplay";
import { render, waitFor } from "@testing-library/react";
import S3ClientImplementation from "../../api/s3client";
import {customRender} from "../../testutils";

jest.mock("@mui/material");
jest.mock("../../api/s3client");

const mockMessages = [
        { 
        messageBody: "Test Text", 
        image: "twilio.com/hostedimage", 
        numMedia: 1
    }, { 
        messageBody: "Testing 2", 
        image: "https://s3-bucket/getimages", 
        numMedia: 1
    }
];

describe("Tests for the message list component", () => {
    afterEach(() => {
       jest.clearAllMocks(); 
    });
    
    it("Should not display anything if no messages provided", () => {
        S3ClientImplementation.prototype.getMessages = jest.fn();
        const { queryByRole } = render(<MessageDisplay />);
        const imageShouldBeNull = queryByRole(/image/i);
        expect(imageShouldBeNull).toBeNull();
    });
    
    it('Should render a message if one passed into the array of messages', () => {
        const message = [{ messageBody: "Test Text", image: "twilio.com/hostedimage", numMedia: 1}];
        S3ClientImplementation.prototype.getMessages = jest.fn().mockImplementation(() => {
            return Promise.resolve(message);
        });
        const { queryByTestId } = render(<MessageDisplay />);
        const messageContainer = queryByTestId(/messagecontainer/i);
        expect(messageContainer).toBeInTheDocument();
    });
    
    it('Should render multiple messages with images', async () => {
        S3ClientImplementation.prototype.getMessages = jest.fn().mockImplementation(() => {
            return Promise.resolve(mockMessages);
        });
        const { queryAllByTestId } = customRender(<MessageDisplay />);
        const images = queryAllByTestId(/message-entry/i);
        expect(images).not.toBeNull();
    });

    it('Should render image message with multiple images? Dont know for certain what that will look like being returned', async () => {
        let mockMessageWithMultipleImages = {
            numMedia: 2,
            image: 's3://sevendaysaway.com;holyshit.com'
        };
        S3ClientImplementation.prototype.getMessages = jest.fn().mockImplementation(() => {
            return Promise.resolve(mockMessageWithMultipleImages);
        });
        const { queryAllByTestId } = customRender(<MessageDisplay />);
        const images = queryAllByTestId(/message-entry/i);
        expect(images).not.toBeNull();
    });

    it('Should handle error for s3 bucket call gracefully', async () => {
        S3ClientImplementation.prototype.getMessages = jest.fn().mockImplementation(() => {
            return Promise.reject({ errorMessage: 'rawr' });
        });
        const { queryByTestId } = render(<MessageDisplay />);
        const messageContainer = queryByTestId(/messagecontainer/i);
        expect(messageContainer).toBeInTheDocument();
    });
});