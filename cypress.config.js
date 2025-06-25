const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
require('dotenv').config(); // Load from root


async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://integration.legalisation.fcodev.org.uk/',
    specPattern: "**/*.feature",
    setupNodeEvents,
    chromeWebSecurity: false,
    video: false,
    filterSpecs: true,
    env: {
      email: process.env.CYPRESS_EMAIL,
      password: process.env.CYPRESS_PASSWORD,
    },
  },
});
