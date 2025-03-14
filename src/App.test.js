import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Photo Album App link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Photo Album App/i);
  expect(linkElement).toBeInTheDocument();
});
