import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let numberOfEvents, NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents numberOfEvents={numberOfEvents} updateEvents={() => {}} />
    );
  });

  test("textbox element is rendered", () => {
    expect(NumberOfEventsWrapper.find(".EventsNumber")).toHaveLength(1);
  });

  test("change state when text input changes", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    NumberOfEventsWrapper.setState({
      numberOfEvents: "32",
    });
    const eventObject = { target: { value: "12" } };
    NumberOfEventsWrapper.find(".EventsNumber").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe("12");
  });

  test("renders text input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".EventsNumber").prop("value")).toBe(
      numberOfEvents
    );
  });
});
