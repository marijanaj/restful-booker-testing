const { defineConfig } = require("cypress");
const properties = require("../cypress/properties")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
            // implement node event listeners here
            config.urls = properties["urls"]
            config.usersInfomation = properties["usersInfomation"]
      return config
    },
  },
});


  