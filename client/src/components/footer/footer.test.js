import Footer from "./footer";
import {customRender} from "../../testutils";
import {fireEvent} from "@testing-library/react";

describe('Footer tests', () => {
    it('Should render footer', () => {
        const { getByRole } = customRender(<Footer />);
        expect(getByRole("footer")).not.toBeNull();
        expect(getByRole("link-list")).not.toBeNull();
        expect(getByRole("event-date")).not.toBeNull();
    })
    
    it('Link should have attribute', () => {
       const { getByTestId } = customRender(<Footer />);
        expect(getByTestId('link-1')).toHaveAttribute('href', "https://www.theknot.com/us/anna-lynd-and-connor-mason-dec-2022");
    });
});

