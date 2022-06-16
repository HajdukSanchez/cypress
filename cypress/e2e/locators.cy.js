describe('Types of locators', () => {
	it('Get element by tag HTML', () => {
		cy.visit('/automation-practice-form') // Cypress add this to our base URL
		cy.get('input') // Get all the inputs in the current page
	})

	it('Get element by ID', () => {
		cy.get('#currentAddress')
	})

	it('Get element by attribute and tag HTML', () => {
		cy.get('input[placeholder="First Name"]')
	})

	it('Get element by CSS class', () => {
		cy.get(':nth-child(3) > .group-header > .header-wrapper')
	})
})
