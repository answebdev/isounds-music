/* eslint-disable no-unreachable */
import { defineConfig } from 'cypress'

module.exports = defineConfig({
  projectId: "2tsaw8",
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
      return config;
    },
    baseUrl: 'https://isoundsmusic.netlify.app/',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
  },
});
