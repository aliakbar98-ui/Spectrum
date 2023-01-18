const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: '26dko9',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern:['**/cypress/e2e/1-getting-started','**/cypress/e2e/2-advanced-examples','**/cypress/e2e/4-SWOPERS'],
    // "watchForFileChanges": false, this will allowed me to bypass login functionality 
    'defaultCommandTimeout':20000,
    // waitForAnimations: false,
    // animationDistanceThreshold: 50,
  },
});
 