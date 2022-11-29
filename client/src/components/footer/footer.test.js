import Footer from "./footer";
import {customRender} from "../../testutils";

describe('Footer tests', () => {
    it('Should render footer', () => {
        const { getByRole } = customRender(<Footer />);
        expect(getByRole("footer")).not.toBeNull();
        expect(getByRole("link-list")).not.toBeNull();
        expect(getByRole("event-date")).not.toBeNull();
    })
});

