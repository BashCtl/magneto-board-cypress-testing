import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: "nx6aoh",
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 10000,
    responseTimeout: 80000
  }
})