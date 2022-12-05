import Header from './header';
import {customRender, TestUtils} from '../../testutils';
import {render} from "@testing-library/react";

jest.mock("@mui/icons-material");

describe('Header Tests', () => {
   it('Should render the header', () => {
       const { getByRole } = render(<TestUtils><Header /></TestUtils>);
       expect(getByRole("header")).not.toBeNull();
   });
});