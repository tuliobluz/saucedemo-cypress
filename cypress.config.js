const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    // viewportWidth: process.env.WIDTH || 1920
    // viewportWidth: process.env.HEIGHT || 1080
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: process.env.ENV_ID || 'https://www.saucedemo.com/',
  },
})
