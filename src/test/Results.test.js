import { screen } from "@testing-library/react";
import Results from "../Results";
import { customRender } from "./customRender";

test("renders normal results page", () => {
  customRender(<Results 
    username="USER" 
    values={["a", "b", "c"]}
    goals={[
        {name: "a", value: "a", rating: 5},
        {name: "b", value: "b", rating: 3},
        {name: "c", value: "c", rating: 2}
    ]}
    valueRatings={{"a": 5, "b": 3, "c": 2}}/>);

  const title = screen.getByText("Final scores:");

  expect(title).toBeInTheDocument();
});

test("renders normal results page with non-zero scores", () => {
    customRender(<Results 
      username="USER" 
      values={["a", "b", "c"]}
      goals={[
          {name: "a", value: "a", rating: 5},
          {name: "b", value: "b", rating: 2},
          {name: "c", value: "c", rating: 3}
      ]}
      valueRatings={{"a": 5, "b": 3, "c": 2}}/>);

    const hints = screen.getAllByText("?");
  
    expect(hints[1].getAttribute("data-tip")).toEqual("It makes sense to prioritize more goals / action items you have related to this value. There is not enough keeping in mind the importance of the value.");
    expect(hints[2].getAttribute("data-tip")).toEqual("It seems that there is too much effort to reach the goal which is not super-important for you. Maybe you can start taking more actions contributing to something more important than this value.");
});

test("renders results with many low-priority values", () => {
    customRender(<Results 
      username="USER" 
      values={["a", "b", "c"]}
      goals={[
          {name: "a", value: "a", rating: 5},
          {name: "b", value: "b", rating: 2},
          {name: "c", value: "c", rating: 3}
      ]}
      valueRatings={{"a": 2, "b": 1, "c": 2}}/>);

    const lowPriorityValues = screen.getByText("More than 75% of your values are low-priority values, that looks a bit weird.");

    expect(lowPriorityValues).toBeInTheDocument();
});

test("renders results with many low-priority goals", () => {
    customRender(<Results 
      username="USER" 
      values={["a", "b", "c"]}
      goals={[
          {name: "a", value: "a", rating: 1},
          {name: "b", value: "b", rating: 2},
          {name: "c", value: "c", rating: 1}
      ]}
      valueRatings={{"a": 2, "b": 1, "c": 2}}/>);

    const lowPriorityGoals = screen.getByText("More than 75% of your goals are low-priority goals, that looks a bit weird. Typically your goals define your action items and I'm pretty sure you're doing a lot of important things everyday. Are those actions related to any of your goals?");

    expect(lowPriorityGoals).toBeInTheDocument();
});

test("renders results with many high-priority goals", () => {
    customRender(<Results 
      username="USER" 
      values={["a", "b", "c"]}
      goals={[
          {name: "a", value: "a", rating: 5},
          {name: "b", value: "b", rating: 4},
          {name: "c", value: "c", rating: 5}
      ]}
      valueRatings={{"a": 2, "b": 1, "c": 2}}/>);

    const highPriorityGoals = screen.getByText("More than a half of your goals are high-priority goals.");

    expect(highPriorityGoals).toBeInTheDocument();
});

test("renders results with goals without values", () => {
    customRender(<Results 
      username="USER" 
      values={["a", "b", "c"]}
      goals={[
          {name: "a", value: "a", rating: 5},
          {name: "b", value: "b", rating: 2},
          {name: "c", value: "c", rating: 3},
          {name: "d", value: "", rating: 3},
      ]}
      valueRatings={{"a": 2, "b": 1, "c": 2}}/>);

    const goalsWithoutValues = screen.getByText("There are some goals without a corresponding value:");

    expect(goalsWithoutValues).toBeInTheDocument();
});

test("renders results with values without goals", () => {
    customRender(<Results 
      username="USER" 
      values={["a", "b", "c", "d"]}
      goals={[
          {name: "a", value: "a", rating: 5},
          {name: "b", value: "b", rating: 2},
          {name: "c", value: "c", rating: 3}
      ]}
      valueRatings={{"a": 2, "b": 1, "c": 2, "d": 3}}/>);

    const valuesWithoutGoals = screen.getByText("I see that you have some values without corresponding goals:");

    expect(valuesWithoutGoals).toBeInTheDocument();
});