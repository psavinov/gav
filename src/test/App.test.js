import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const startButton = screen.getByText("Let's start!");
  expect(startButton).toBeInTheDocument();
});
