import Footer from "./footer";
import {customRender} from "../../testutils";
import {fireEvent} from "@testing-library/react";

describe('Footer tests', () => {
    it('Should render footer', () => {
        const { getByRole } = customRender(<Footer />);
        expect(getByRole("footer")).not.toBeNull();
    });
});

