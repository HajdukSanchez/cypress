const { defineConfig } = require('cypress')

module.exports = defineConfig({
	// Media of the test example
	viewportWidth: 1920,
	viewportHeight: 1080,
	e2e: {
		setupNodeEvents(on, config) {},
		// Exclude specific test files
		excludeSpecPattern: ['/cypress/e2e/1-getting-started/*.js', '/cypress/e2e/2-advanced-examples/*.js'],
		baseUrl: 'https://demoqa.com', // URL base of the website
	},
})
