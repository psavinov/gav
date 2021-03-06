import { screen, fireEvent } from "@testing-library/react";
import GoalsRating from "../GoalsRating";
import { customRender } from "./customRender";

test("renders corresponding goals", () => {
  customRender(<GoalsRating username="USER" returning={true} goals={[{name: "test goal", rating: 1}]}/>);

  const goalColumn = screen.getByText("test goal");

  expect(goalColumn).toBeInTheDocument();
});

test("updates corresponding goal rating", () => {
    customRender(<GoalsRating username="USER" returning={true} goals={[{name: "test goal", rating: 1}]} onChange={(index, rating) => expect(rating).toEqual(5)}/>);  
    const goalColumn = screen.getByText("test goal");
    const goalInput = goalColumn.nextSibling.children[0];

    fireEvent.change(goalInput, { target: { value: 5 }});
  
    expect(goalInput).toBeInTheDocument();
});

test("updates corresponding goal rating to empty string in case of invalid input", () => {
    customRender(<GoalsRating username="USER" returning={true} goals={[{name: "test goal", rating: 1}]} onChange={(index, rating) => expect(rating).toEqual("")}/>);  

    const goalColumn = screen.getByText("test goal");
    const goalInput = goalColumn.nextSibling.children[0];

    fireEvent.change(goalInput, { target: { value: 10 }});
  
    expect(goalInput).toBeInTheDocument();
});
