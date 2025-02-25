const { defineConfig } = require("cypress");
module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            require("cypress-env")(on, config, __dirname);
            return config;
        },
        experimentalStudio: true,
    },
});
