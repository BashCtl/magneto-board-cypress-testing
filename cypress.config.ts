import { defineConfig } from 'cypress'
import { tagify } from 'cypress-tags';

export default defineConfig({
  projectId: "nx6aoh",
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 10000,
    responseTimeout: 60000,
    setupNodeEvents(on, config) {
      on('file:preprocessor', tagify(config));
    },
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json'
  }
})