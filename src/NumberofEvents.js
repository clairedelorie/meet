import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 12,
    errorText: "",
  };

  updateEventCount = (eventCount) => {
    if (eventCount < 1 || eventCount > 32) {
      return this.setState({
        numberOfEvents: 0,
        errorText: "Please select a number between 1-32",
      });
    } else {
      this.setState({
        numberOfEvents: eventCount,
        errorText: "",
      });
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          className="EventsNumber"
          value={this.state.numberOfEvents}
          onChange={(e) => this.updateEventCount(e.target.value)}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
