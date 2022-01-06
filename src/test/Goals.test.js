import { screen, fireEvent } from "@testing-library/react";
import Goals from "../Goals";
import { customRender } from "./customRender";

test("renders existing goals", () => {
  customRender(<Goals username="USER" returning={true} values={["test value"]} goals={[{name: "test goal", value: "", rating: ""}]} />);

  const goalInput = screen.getByDisplayValue("test goal");

  expect(goalInput).toBeInTheDocument();
});

test("renders existing values", () => {
    customRender(<Goals username="USER" returning={true} values={["test value"]} goals={[{name: "test goal", value: "", rating: ""}]} />);
  
    const goalInput = screen.getByDisplayValue("test goal");
  
    const valuesSelect = goalInput.parentElement.nextSibling.children[0];

    expect(valuesSelect.children[0].value).toEqual("");
    expect(valuesSelect.children[1].value).toEqual("test value");
});

test("adds new goal line when clicking plus button", () => {
    customRender(<Goals username="USER" onAddGoal={() => expect(true).toBeTruthy()} values={["test value"]} goals={[{name: "test goal", value: "", rating: ""}]} />);
  
    const plusButton = screen.getByText("+");
    expect(plusButton).toBeInTheDocument();

    fireEvent.click(plusButton);
});

test("updates the goal name when user changes the input", () => {
    customRender(<Goals username="USER" onUpdateGoal={(index, goal) => expect(goal.name).toEqual("updated goal")} values={["test value"]} goals={[{name: "test goal", value: "", rating: ""}]} />);
  
    const goalInput = screen.getByDisplayValue("test goal");

    fireEvent.change(goalInput, { target: {value: "updated goal" }});
});

test("updates the goal value when user changes the input", () => {
    customRender(<Goals username="USER" onUpdateGoal={(index, goal) => expect(goal.value).toEqual("test value")} values={["test value"]} goals={[{name: "test goal", value: "", rating: ""}]} />);
  
    const goalInput = screen.getByDisplayValue("test goal");
  
    const valuesSelect = goalInput.parentElement.nextSibling.children[0];

    fireEvent.change(valuesSelect, { target: {value: valuesSelect.children[1].value }});
});

test("removes the goal from the list when minus button is clicked", () => {
    customRender(<Goals username="USER" onRemoveGoal={(removeIndex) => expect(removeIndex).toEqual(0)} values={["test value"]} goals={[{name: "test goal", value: "", rating: ""}]} />);
  
    const goalInput = screen.getByDisplayValue("test goal");
  
    expect(goalInput).toBeInTheDocument();

    const minusButton = screen.getByText("\u2013");
    expect(minusButton).toBeInTheDocument();

    fireEvent.click(minusButton);
});