import { screen } from '@testing-library/react';
import App from '../App';
import { customRender } from "./customRender";

test('renders learn react link', () => {
  customRender(<App />);
  const startButton = screen.getByText("Let's start!");
  expect(startButton).toBeInTheDocument();
});
