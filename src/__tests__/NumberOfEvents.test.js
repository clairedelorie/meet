import React from "react";
import { shallow } from "enzyme";
import NumberofEvents from "../NumberofEvents";

describe("<NumberofEvents /> component", () => {
  let NumberofEventsWrapper;
  beforeAll(() => {
    NumberofEventsWrapper = shallow(<NumberofEvents />);
  });

  test("textbox element is rendered", () => {
    expect(NumberofEventsWrapper.find(".EventsNumber")).toHaveLength(1);
  });

  test("change state when text input changes", () => {
    const NumberofEventsWrapper = shallow(<NumberofEvents />);
    NumberofEventsWrapper.setState({
      query: "32",
    });
    const eventObject = { target: { value: "12" } };
    NumberofEventsWrapper.find(".EventsNumber").simulate("change", eventObject);
    expect(NumberofEventsWrapper.state("query")).toBe("12");
  });

  test("renders text input correctly", () => {
    const query = NumberofEventsWrapper.state("query");
    expect(NumberofEventsWrapper.find(".EventsNumber").prop("value")).toBe(
      query
    );
  });
});
