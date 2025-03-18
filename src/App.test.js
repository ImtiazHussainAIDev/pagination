import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pagination container', () => {
  render(<App />);
  const containerElement = screen.getByRole('navigation', { name: /page navigation/i });
  expect(containerElement).toBeInTheDocument();
});

test('renders initial page content', () => {
  render(<App />);
  expect(screen.getByText('Item 1')).toBeInTheDocument();
});
