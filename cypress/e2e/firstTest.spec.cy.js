describe('First test', () => {
	it('Navigate to first page', () => {
		cy.visit('www.platzi.com')
	})

	it('Navigate to second page', () => {
		cy.visit('www.platzi.com')
	})

	// We can nest test and describe inside other test and describes quite easy
	describe('First test inside First test', () => {
		it('Navigate to first page', () => {
			cy.visit('www.platzi.com')
		})

		it('Navigate to second page', () => {
			cy.visit('www.platzi.com')
		})
	})
})
