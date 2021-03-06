import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    errorText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value > 32 || value <= 0) {
      this.setState({
        errorText: "Please enter a number between 1 and 32.",
      });
    } else {
      this.props.updateEventCount(value);
      this.setState({
        errorText: "",
      });
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <p>Enter the number of events you'd like to see</p>

        <input
          type="text"
          className="EventsNumber"
          value={this.props.numberOfEvents}
          onChange={(e) => this.handleInputChanged(e)}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
