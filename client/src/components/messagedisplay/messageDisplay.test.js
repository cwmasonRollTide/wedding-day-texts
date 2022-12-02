import MessageDisplay from "./messageDisplay";
import { render } from "@testing-library/react";

jest.mock("@mui/material");

describe("Tests for the message list component", () => {
    it("Should not display anything if no messages proved", () => {
        const { queryByRole } = render(<MessageDisplay />);
        const imageShouldBeNull = queryByRole(/img/i);
        expect(imageShouldBeNull).toBeNull();
    });
    
    it('Should render a message if one passed into the array of messages', () => {
        const messages = [{ messageBody: "Test Text", image: "twilio.com/hostedimage", numMedia: 1}];
        const { queryByTestId } = render(<MessageDisplay messages={messages} />);
        const imageShouldBeNull = queryByTestId(/messagecontainer/i);
        expect(imageShouldBeNull).toBeInTheDocument();
    });
});