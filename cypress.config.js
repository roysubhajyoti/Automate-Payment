const { defineConfig } = require("cypress");
const config = require("./config");
module.exports = defineConfig({
  e2e: {
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    env: {
      email: config.email,
      password: config.password,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
