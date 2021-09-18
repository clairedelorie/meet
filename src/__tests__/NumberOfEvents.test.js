import React from "react";
import { shallow } from "enzyme";
import NumberofEvents from "../NumberofEvents";

describe("<NumberofEvents /> component", () => {
  let numberOfEvents, NumberofEventsWrapper;
  beforeAll(() => {
    NumberofEventsWrapper = shallow(
      <NumberofEvents numberOfEvents={numberOfEvents} updateEvents={() => {}} />
    );
  });

  test("textbox element is rendered", () => {
    expect(NumberofEventsWrapper.find(".EventsNumber")).toHaveLength(1);
  });

  test("change state when text input changes", () => {
    const NumberofEventsWrapper = shallow(<NumberofEvents />);
    NumberofEventsWrapper.setState({
      numberOfEvents: "32",
    });
    const eventObject = { target: { value: "12" } };
    NumberofEventsWrapper.find(".EventsNumber").simulate("change", eventObject);
    expect(NumberofEventsWrapper.state("numberOfEvents")).toBe("12");
  });

  test("renders text input correctly", () => {
    const numberOfEvents = NumberofEventsWrapper.state("numberOfEvents");
    expect(NumberofEventsWrapper.find(".EventsNumber").prop("value")).toBe(
      numberOfEvents
    );
  });
});
