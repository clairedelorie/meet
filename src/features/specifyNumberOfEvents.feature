Feature: specify the number of events

  Scenario: When user hasn’t specified a number, 12 is the default number
    Given the user hasn’t specified any number
    When the main page is open
    Then the number of events will be 12

  Scenario: User can change the number of events they want to see
    Given a list of events is shown to the user
    When the user specifies a number of events to show
    Then the user should see the number of events specified