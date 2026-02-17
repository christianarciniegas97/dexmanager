Cypress E2E Automation – login 

This project contains an end-to-end automated test built with Cypress.
It validates a login in Dex Manager

--------------------------------------------------

Requirements

- Node.js (version 18 or higher)
- npm

--------------------------------------------------

Installation

1. Clone the repository or unzip the project folder
2. Open a terminal in the project root directory
3. Install dependencies:

   npm install

--------------------------------------------------

Running the tests

To open Cypress Test Runner:

   npm run cy:open

To run the tests in headless mode:

   npm run cy:run

--------------------------------------------------

Test reports

Test reports are generated automatically using Mochawesome and are included
in this project as supporting evidence of the implementation.

The report is generated after running the tests in headless mode:

   npm run cy:run

HTML reports are available in the following directory:

   cypress/reports/index.html

also it' generated a video  after cypress run with evidence on test in the folder 

   cypress/videos

--------------------------------------------------

Project structure

- cypress/e2e        → Test specifications
- cypress/pages      → Page Objects
- cypress/helpers    → Network and utility helpers
- cypress/fixtures   → Test data (data-driven)
- cypress/reports    → Test execution reports
- cypress.config.js  → Cypress configuration


--------------------------------------------------

Technical Observation

The login form inputs are implemented using Polymer Web Components, which encapsulate native `<input>` elements within Shadow DOM.

By default, Cypress does not traverse Shadow DOM boundaries, which prevented reliable element selection and interaction during test execution.

To resolve this, the `includeShadowDom: true` configuration was enabled in the Cypress setup, allowing Cypress to properly access and interact with Shadow DOM elements.

Without this configuration, Cypress was unable to consistently locate the input elements, leading to test instability.

This adjustment ensures stable, reliable, and maintainable end-to-end test automation.