const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reactNativeHotReload: false,
    testIsolation: false,
    viewportWidth: 414,
    viewportHeight: 896,
    baseUrl: "http://localhost:8081/"
  },
});
