import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import WelcomeScreen from "./WelcomeScreen";
import EventGenre from "./EventGenre";
import { Container, Row, Col } from "react-bootstrap";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";
import { WarningAlert } from "./Alert";
import "./nprogress.css";
import logo from "./logo.png";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: "all",
    numberOfEvents: 12,
    showWelcomeScreen: undefined,
    warningText: "",
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");

    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });

      if (!navigator.onLine) {
        this.setState({
          warningText: "You are offline. Events may be outdated",
        });
      } else {
        this.setState({
          warningText: "",
        });
      }
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);

      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents),
        currentLocation: location,
      });
    });
  };

  updateEventCount = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: eventCount,
    });

    this.updateEvents(currentLocation);
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
  };

  render() {
    const { locations, numberOfEvents, events } = this.state;
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;

    return (
      <Container className="App">
        <Row className="welcome-screen">
          <Col>
            <WelcomeScreen
              showWelcomeScreen={this.state.showWelcomeScreen}
              getAccessToken={() => {
                getAccessToken();
              }}
            />
          </Col>
        </Row>

        <Row className="App-Logo">
          <Col md={12}>
            <img src={logo} className="title-logo" alt="Meet Up App Logo" />
          </Col>
        </Row>

        <Row className="choose-city">
          Choose your nearest city
          <Col className="city-search">
            <CitySearch
              updateEvents={this.updateEvents}
              locations={locations}
            />
          </Col>
        </Row>

        <Row className="number-of-events">
          <Col>
            <NumberOfEvents
              numberOfEvents={numberOfEvents}
              updateEventCount={this.updateEventCount}
            />
          </Col>
        </Row>
        <Row className="data-visualization">
          <div className="data-vis-wrapper">
            <div className="pie-chart">
              <EventGenre events={events} />
            </div>
            <div className="scatter-chart">
              <ResponsiveContainer height={400} width={400}>
                <ScatterChart
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <CartesianGrid />
                  <XAxis type="category" dataKey="city" name="city" />
                  <YAxis
                    allowDecimals={false}
                    type="number"
                    dataKey="number"
                    name="number of events"
                  />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter data={this.getData()} fill="#8884d8" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Row>
        <h2>Events near you</h2>
        <Row className="event-list">
          <Col md={12}>
            <EventList events={events} />
          </Col>
        </Row>

        <WarningAlert text={this.state.warningText} />
      </Container>
    );
  }
}

export default App;
