import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Café Lumière title', () => {
  render(<App />);
  const heading = screen.getByText(/Café Lumière/i);
  expect(heading).toBeInTheDocument();
});