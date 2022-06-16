describe('Types of locators', () => {
	// Function before start all the test
	before(() => {
		cy.visit('/automation-practice-form')
	})

	it('Get element by tag HTML', () => {
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

	it('Get element using contais', () => {
		// Using contains we know that the element is inside the parent element or some text
		cy.contains('Reading')
		cy.contains('.header-wrapper', 'Widgets') // Probably we have multiples header-wrappers but only one with the text 'Widgets'
	})

	it('Get element parent of a element', () => {
		cy.contains('.header-wrapper', 'Widgets').parent() // We get the parent element of the element with the text 'Widgets'
	})

	it('Get parents elements of a element', () => {
		cy.contains('.header-wrapper', 'Widgets').parents() // We get the parents elements of the element with the text 'Widgets'
	})

	it('Filter element using parent', () => {
		cy.contains('.header-wrapper', 'Widgets').parents().find('label') // Get all labels inside the parents of the element with the text 'Widgets'
	})
})
