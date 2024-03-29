import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: "yxu62d",
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://isoundsmusic.netlify.app/',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
  },
})
