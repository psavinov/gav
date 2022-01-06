import { screen } from '@testing-library/react';
import Introduction from '../Introduction';
import { customRender } from "./customRender";

test('renders hello text, label and name field', () => {
  customRender(<Introduction username="USER" />);

  const helloText = screen.getByText("Hello, USER!");
  expect(helloText).toBeInTheDocument();
  const nameLabel = screen.getByLabelText("Preferred name")
  expect(nameLabel).toBeInTheDocument();
});

test('renders welcome back text for the returning user', () => {
  customRender(<Introduction username="USER" returning={true}/>);

  const helloText = screen.getByText("Welcome back! Great to see you here again. If you're ok with your current user name feel free to skip this step.");
  expect(helloText).toBeInTheDocument();
});