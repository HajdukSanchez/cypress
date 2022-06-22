describe('Assertions', () => {
	before(() => {
		cy.visit('/automation-practice-form')
	})

	it('should render a valid URL', () => {
		cy.url().should('include', 'demoqa.com')
	})

	// Assertion 1
	it('should input "First name" is visible 1', () => {
		cy.get('#firstName').should('be.visible')
		cy.get('#firstName').should('be.visible').and('have.attr', 'placeholder', 'First Name')
	})

	// Assertion 2
	it('should input "First name" is visible 2', () => {
		cy.get('#firstName').then((element) => {
			expect(element).to.be.visible
			expect(element).to.have.attr('placeholder', 'First Name')
		})
	})

	// Assertion 3
	it('should input "First name" is visible 3', () => {
		cy.get('#firstName').then((element) => {
			assert.equal(element.attr('placeholder'), 'First Name')
		})
	})
})
