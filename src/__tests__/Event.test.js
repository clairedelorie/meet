import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  test("summary is shown", () => {
    expect(EventWrapper.find(".EventLocation")).toHaveLength(1);
  });

  test("location is shown", () => {
    expect(EventWrapper.find(".EventLocation")).toHaveLength(1);
  });

  test("date and timezone are shown", () => {
    expect(EventWrapper.find(".EventDate")).toHaveLength(1);
  });

  test("render show details button", () => {
    expect(EventWrapper.find(".showMore")).toHaveLength(1);
  });

  test("change show-state on click", () => {
    EventWrapper.setState({
      show: false,
    });
    EventWrapper.find(".showMore").simulate("click");
    expect(EventWrapper.state("show")).toEqual(true);
  });

  test("hide details by default", () => {
    EventWrapper.setState({
      show: false,
    });

    expect(EventWrapper.find(".EventDetails")).toHaveLength(0);
  });

  test("show detail on click", () => {
    EventWrapper.setState({
      show: false,
    });

    EventWrapper.find(".showMore").simulate("click");
    expect(EventWrapper.find(".EventDetails")).toHaveLength(1);
  });

  test("hide details on click", () => {
    EventWrapper.setState({
      show: true,
    });

    EventWrapper.find(".showLess").simulate("click");
    expect(EventWrapper.find(".EventDetails")).toHaveLength(0);
  });
});
