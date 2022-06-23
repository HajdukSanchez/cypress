const { defineConfig } = require('cypress')

module.exports = defineConfig({
	// Media of the test example
	viewportWidth: 1920,
	viewportHeight: 1080,
	e2e: {
		setupNodeEvents(on, config) {
			on('task', {
				log(message) {
					console.log(message)
					return null
				},
			})
		},
		// Exclude specific test files
		excludeSpecPattern: ['**/e2e/1-getting-started/*', '**/e2e/2-advanced-examples/*'],
		baseUrl: 'https://demoqa.com', // URL base of the website
	},
})
