import { render, screen } from '@testing-library/react';
import WeddingDayTexts from './WeddingDayTexts';

test('renders learn react link', () => {
  render(<WeddingDayTexts />);
  const linkElement = screen.getByText(/react-based application/i);
  expect(linkElement).toBeInTheDocument();
});
