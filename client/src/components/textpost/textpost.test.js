import TextPost from "./textpost";
import { render } from "@testing-library/react";

describe('Text Post tests', () => {
    it('Should render text post', () => {
       const { getByRole } = render(<TextPost message={"message"} />);
       expect(getByRole("text-post")).toBeInTheDocument();
    });
});