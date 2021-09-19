import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 12,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="text"
          className="EventsNumber"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
