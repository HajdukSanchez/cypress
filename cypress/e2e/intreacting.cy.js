describe('Elements interaction', () => {
	before(() => {
		cy.visit('/buttons') // Visit buttons page
	})

	it('should click "Click me" button and show the message', () => {
		// Get button with index 3 (In cypress elements start from 1, not from 0)
		cy.get('button').eq(3).click() // Interaction with the specific button
		cy.get('#dynamicClickMessage').should('be.visible').and('contain', 'You have done a dynamic click') // Verify if the message is visible and contains the text
	})

	it('should double click "Double click me" button and show the message', () => {
		cy.get('#doubleClickBtn').dblclick()
		cy.get('#doubleClickMessage').should('be.visible').and('contain', 'You have done a double click')
	})

	it('should force click', () => {
		cy.visit('/dyamic-properties')
		cy.get('#enableAfter').click({ timeout: 0, force: true }) // The button will be enable after 5 seconds, so for avoid errors we use force: true, to click the button
	})

	it('should click by position', () => {
		cy.visit('/buttons')
		cy.get('button').eq(3).parent().parent().click('topRight')
		cy.get('button').eq(3).parent().parent().click(10, 20)
	})
})
