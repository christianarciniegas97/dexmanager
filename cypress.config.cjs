const { defineConfig } = require("cypress")
const cypressOnFix = require("cypress-on-fix")

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reporterDir: "cypress/reports",
    overwrite: true,
    html: true,
    JSON: true
  },

  e2e: {
    setupNodeEvents(on, config) {
      on = cypressOnFix(on);
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
    baseUrl:"https://demo4.dexmanager.com",
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: false,
    video: true,
    viewportWidth: 1440,
    viewportHeight: 1080,
  },
});
