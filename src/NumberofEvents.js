import React, { Component } from "react";

class NumberofEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
  };

  render() {
    return (
      <div className="NumberofEvents">
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

export default NumberofEvents;
