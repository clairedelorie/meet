import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

class Event extends Component {
  state = {
    show: false,
  };

  handleButton = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    let event = this.props.event;

    return (
      <Col className="Event">
        <Card>
          <Card.Header className="EventSummary">{event.summary}</Card.Header>
          <Card.Text className="EventLocation">{event.location}</Card.Text>
          <Card.Text className="EventDate">
            start: {event.start.dateTime} - Time Zone: {event.start.timeZone}
          </Card.Text>
          {this.state.show === true && (
            <p className="EventDetails">{event.description}</p>
          )}
          {this.state.show === false && (
            <Button className="showMore" onClick={() => this.handleButton()}>
              Show details
            </Button>
          )}
          {this.state.show === true && (
            <Button className="showLess" onClick={() => this.handleButton()}>
              hide details
            </Button>
          )}
        </Card>
      </Col>
    );
  }
}
export default Event;
