Feature: Option to check for repos
  As a user I want the hability to check for repos on github

  Background:
    Given User is logged in

  Scenario: User checks for repos of salorrego
    When User tries to get repos of "salorrego"
    Then User should get public repos of "salorrego"

  Scenario: User gets cucumber-examples repo from salorrego user
    When User tries to get "cucumber-examples" repo from "salorrego" user
    Then User should get a "cucumber-examples" repo with package.json file

  Scenario: User gets cucumber-examples repo content flow
    When User tries to get repos of "salorrego"
    Then User should get public repos of "salorrego"
    When User tries to get "cucumber-examples" repo from pulled repos
    Then User should get a "cucumber-examples" repo with package.json file
