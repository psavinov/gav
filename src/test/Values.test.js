import { screen, fireEvent } from "@testing-library/react";
import { AVAILABLE_VALUES } from "../availableValues";
import { customRender } from "./customRender";
import Values from "../Values";

test("renders corresponding text for the returning user", () => {
  customRender(<Values username="USER" returning={true} values={[]}/>);

  const helloText = screen.getByText("Since it is not your first time here, you're probably familiar with the idea, but just in case here is the reminder.");
  expect(helloText).toBeInTheDocument();
});

test("renders available values", () => {
    customRender(<Values username="USER" returning={true} values={[]}/>);
  
    const availableValuesLabel = screen.getByText("Available values");
    expect(availableValuesLabel).toBeInTheDocument();

    const availableValuesSelect = availableValuesLabel.nextSibling.nextSibling;

    expect(availableValuesSelect.children).toHaveLength(AVAILABLE_VALUES["en"].length);
});

test("renders selected values", () => {
    customRender(<Values username="USER" returning={true} values={["test1", "test2", "test3"]}/>);
  
    const selectedValuesLabel = screen.getByText("Selected values");
    expect(selectedValuesLabel).toBeInTheDocument();

    const selectedValuesSelect = selectedValuesLabel.nextSibling.nextSibling.children[0];

    expect(selectedValuesSelect.children).toHaveLength(3);
});

test("adds new value from the available list", () => {
    customRender(<Values username="USER" returning={true} values={[]} onAddValue={(valuesToAdd) => expect(valuesToAdd[0]).toEqual(AVAILABLE_VALUES["en"][0].id)}/>);
  
    const plusButton = screen.getByText("+");
    expect(plusButton).toBeInTheDocument();

    const availableValuesLabel = screen.getByText("Available values");
    expect(availableValuesLabel).toBeInTheDocument();

    const availableValuesSelect = availableValuesLabel.nextSibling.nextSibling;

    fireEvent.change(availableValuesSelect, { target: { value: AVAILABLE_VALUES["en"][0].id } })
    fireEvent.click(plusButton);
});

test("removes value from the selected list", () => {
    customRender(<Values username="USER" returning={true} values={["test"]} onRemoveValue={(valuesToRemove) => expect(valuesToRemove[0]).toEqual("test")}/>);

    const minusButton = screen.getByText("\u2013");
    expect(minusButton).toBeInTheDocument();

    const selectedValuesLabel = screen.getByText("Selected values");
    expect(selectedValuesLabel).toBeInTheDocument();
    const selectedValuesSelect = selectedValuesLabel.nextSibling.nextSibling.children[0];

    fireEvent.change(selectedValuesSelect, { target: { value: "test" } })
    fireEvent.click(minusButton);


});