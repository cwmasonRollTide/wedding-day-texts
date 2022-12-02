import ImagePost from "./imagepost";
import { render } from "@testing-library/react";
import {Image} from "@mui/icons-material";

describe('Image Post tests', () => {
   it('should render image post', () => {
       const message = {
           image: 'src/image',
           messageText: 'testText',
           numMedia: 1
       };
       const {getByRole} = render(<ImagePost message={message} />);
       expect(getByRole("image")).toBeInTheDocument();
       expect(getByRole("message-text")).toBeInTheDocument();
   });
});