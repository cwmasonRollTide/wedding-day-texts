import { render } from "@testing-library/react";
import {customRender} from "../../testutils";
import TextPost from "./textpost";

describe('Text Post tests', () => {
    it('Should render text post', () => {
       const { getByRole } = render(<TextPost message={"message"} />);
       expect(getByRole("text-post")).toBeInTheDocument();
    });
});