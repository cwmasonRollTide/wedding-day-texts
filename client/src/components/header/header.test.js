import Header from './header';
import {customRender} from '../../testutils';

jest.mock("@mui/icons-material");

describe('Header Tests', () => {
   it('Should render the header', () => {
       const { getByRole } = customRender(<Header />);
       expect(getByRole("header")).not.toBeNull();
   }) 
});