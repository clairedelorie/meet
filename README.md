To build a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.


FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
  As a user, I should be able to show/hide an event’s details so that I can see more or less of an event’s details.
    Scenario 1: An event element is collapsed by default
      Given the main page is open
      When user selects an event
      Then event elements are collapsed by default.
   Scenario 2: User can expand an event to see its details
      Given the main page is open
      When the user clicks on an event 
      Then user can see expanded event details
    Scenario 3: User can collapse an event to hide its details
      Given user is clicked on an event
      When the user clicks on event details
      Then the details are collapsed
FEATURE 3: SPECIFY NUMBER OF EVENTS
  As a user, I should be able to specify the number of events so that I can see more or less events.
    Scenario 1: When user hasn’t specified a number, 32 is the default number
      Given the main page is open
      When user opens events
      Then 32 events will be shown
    Scenario 2: User can change the number of events they want to see
      Given the main page is open
      When user changes number of events shown
      Then the specified number of events will show
FEATURE 4: USE THE APP WHEN OFFLINE
  As a user, I should be able to use the app when offline so that I can see events near me without internet connection..
    Scenario 1: Show cached data when there’s no internet connection
      Given the user has no internet connection
      When the user looks at events
      Then the user will see cached data from previous internet connection
    Scenario 2: Show error when user changes the settings (city, time range)
      Give the user has no internet connection
      When user changes settings for city or time range
      Then an error message is shown 
FEATURE 5: DATA VISUALIZATION
As a user, I should be able to see a chart showing upcoming events so that I can see upcoming events in each city.
  Scenario 1: Show a chart with the number of upcoming events in each city
    Given the main page is open
    When user clicks on the chart
    Then a chart of upcoming events in each city is shown

