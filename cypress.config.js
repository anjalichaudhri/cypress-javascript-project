const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/index.js',
    specPattern: 'cypress/specs/**/*.cy.js', // Pattern for your test files
    baseUrl: 'https://jsonplaceholder.typicode.com', // Change this to your application's base URL

    // Default timeout for commands (in ms) 4000
    defaultCommandTimeout: 4000,

    // Timeout for HTTP requests (in ms) 5000
    requestTimeout: 5000,

    // Timeout for waiting for a response from a network request (in ms) 30000
    responseTimeout: 30000,

    // Timeout for page load (in ms) 60000
    pageLoadTimeout: 60000,

    // Optionally, if you need to configure videos and screenshots // default value false
    video: true,  // Record videos for test runs (default is true)
    screenshotOnRunFailure: true,  // Capture screenshots on failures (default is true) default value true

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
