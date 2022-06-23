describe('Waiting for elements test', () => {
	before(() => {
		cy.visit('www.platzi.com')
	})

	it('Should wait for a specific time', () => {
		cy.wait(5000) // Miliseconds
	})

	it('Should wait for an element', () => {
		cy.get('.ButtonLogin-cta', { timeout: 2000 }) // Wait for 2 seconds
	})

	it.only('Should wait for an element and make an assertion', () => {
		cy.get('.ButtonLogin-cta', { timeout: 2000 }).Should('be.visible')
	})

	it('Should disabled retry on get elements', () => {
		cy.get('.banner-image444', { timeout: 0 }) // Using 0 means that it will not retry or wait for the element
	})
})
