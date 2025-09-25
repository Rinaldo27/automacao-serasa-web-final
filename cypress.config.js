const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chomeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 60000
  },
});
