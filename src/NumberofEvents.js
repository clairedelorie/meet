import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 12,
    errorText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (!(value <= 32) || !(value > 0)) {
      this.setState({
        numberOfEvents: value,
        errorText: "Please enter a number between 1 and 32.",
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: "",
      });
      this.props.updateEventCount(event.target.value);
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={this.state.errorText} />
        <input
          type="text"
          className="EventsNumber"
          value={this.state.numberOfEvents}
          onChange={(e) => this.handleInputChanged(e)}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
