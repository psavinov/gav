import { render, screen, fireEvent } from "@testing-library/react";
import ValuesRating from "../ValuesRating";

test("renders corresponding values", () => {
  render(<ValuesRating username="USER" returning={true} values={["test value"]} valueRatings={{}}/>);

  const valueColumn = screen.getByText("test value");

  expect(valueColumn).toBeInTheDocument();
});

test("updates corresponding value rating", () => {
    render(<ValuesRating username="USER" returning={true} values={["test value"]} valueRatings={{}} onChange={(index, rating) => expect(rating).toEqual(5)} />);
  
    const valueColumn = screen.getByText("test value");
    const valueInput = valueColumn.nextSibling.children[0];

    fireEvent.change(valueInput, { target: { value: 5 }});
  
    expect(valueColumn).toBeInTheDocument();
});

test("updates corresponding value rating to empty string in case of invalid input", () => {
    render(<ValuesRating username="USER" returning={true} values={["test value"]} valueRatings={{}} onChange={(index, rating) => expect(rating).toEqual("")} />);
  
    const valueColumn = screen.getByText("test value");
    const valueInput = valueColumn.nextSibling.children[0];

    fireEvent.change(valueInput, { target: { value: 10 }});
  
    expect(valueColumn).toBeInTheDocument();
});
