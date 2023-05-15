# QA Engineer test

### This is a sample project to test a web application using Cypress. In this project you will find the configuration required to write tests for the https://www.saucedemo.com/ website. To start with, the login part has already been implemented in the sample_test.spec.js file.

### Requirements:

- Write an E2E test in the sample_test.spec.js file to buy any item from https://www.saucedemo.com/.

#### Feel free to update the project in any way you see fit.

# Cypress Project QA Engineer - saucedemo

This repository contains a Cypress project for setting up and running tests on the Saucedemo shop. Below you will find information on the project setup, running tests, fixtures, GitHub Actions integration, and reports.

## Cypress Requirements

Make sure you have Cypress installed as a dependency. You can install Cypress using the following command:

```
npm install cypress
```

## Folder Structure

The following is the suggested folder structure for Playwright tests:

* `interview-frontend-test`
    * `.github`: contains a template for GitHub actions.
    * `cypress`
      * `downloads`: Path to folder where files downloaded during a test are saved.
      * `e2e`: 
          * `sample_test.cy.js`: a sample specification.
      * `fixtures`: Mock data to use on the tests.
      * `plugins`: Here you can maintain the plugins that enable you to tap into, modify, or extend the internal behavior of Cypress.
      * `support`:
        * `commands.js`: Custom commands or overwrite existing commands.
        * `e2e.js`: This is loaded before the test files, here you can add the global configurations.
      

## Project Configuration

In the `cypress.config.js` file, ensure that the following settings are correctly configured:

- `baseUrl`: The base URL for the Saucedemo shop. By default, it is set to `https://www.saucedemo.com/`.

## Running Tests

To run the tests, use the following npm scripts defined in the `package.json` file:

- `test`: Runs the Cypress tests using the Chrome browser.
- `test:stage`: Runs the Cypress tests on the staging environment. You can specify the staging URL by setting the `baseUrl` to `http://stage.saucedemo.com/`.
- `test:report`: Runs the Cypress tests and generates a Mochawesome report.

To execute the desired script, run the following command:

```
npm run <script-name>
```

## Custom Selector

A custom selector called `getBySel` is available in the project. It uses the `data-test` attribute for element selection. You can use this selector in your tests to target specific elements.

```javascript
cy.getBySel('your-selector')
```

## Fixtures

The project uses fixture data to populate test data. The fixture file, such as `testDataReview.json` or `testDataStage.json`, contains data used during test execution. By default, the `testDataReview.json` file is used. If you want to use a different fixture file, you can set the `testData` environment variable to the desired file path.

Example fixture data (`testDataReview.json`):

```json
{
  "userName": "standard_user",
  "password": "secret_sauce",
  "firstName": "Standard",
  "lastName": "User",
  "postalCode": "12345"
}
```

## GitHub Actions Integration

This project includes a GitHub Actions workflow for running Cypress end-to-end tests. The workflow is triggered when you push changes to the repository. The following steps are executed:

1. Checkout the repository.
2. Install the project dependencies.
3. Run Cypress tests and generate a Mochawesome report.
4. Upload the Mochawesome report as an artifact.

The generated Mochawesome report can be accessed through the GitHub Actions summary. Additionally, you can configure the workflow to upload videos if needed.

## Reports

The GitHub Actions summary includes an artifact containing the Mochawesome HTML report. You can access the report to view detailed test results.

## Slack Integration

After running the backend and frontend tests, the GitHub Actions workflow sends a message to Slack channels. Currently, the message is sent only when the job succeeds. In a real scenario, notifications can be sent for both successful and failed jobs.

If you want to join the Slack channel for integration, please use the following invitation link: [Slack Invitation Link](https://join.slack.com/t/github-integrationhq/shared_invite/zt-1uzcgmgde-j6JNKORGMNZgAI2ayyvUYg)
