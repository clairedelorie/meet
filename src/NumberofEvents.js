import React, { Component } from "react";

class NumberofEvents extends Component {
  state = {
    query: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
  };

  render() {
    return (
      <div className="NumberofEvents">
        <input
          type="text"
          className="EventsNumber"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberofEvents;
