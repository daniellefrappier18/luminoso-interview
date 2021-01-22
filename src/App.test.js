import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a textarea', () => {
  render(<App />);
  const textarea = screen.getByLabelText(/Text to analyze/);
  expect(textarea).toBeInTheDocument();
});
