describe('Navigation', () => {
	it('Navigate to Platzi', () => {
		cy.visit('www.platzi.com')
	})

	it('Reload Platzi page', () => {
		cy.reload()
	})

	it('Reload page stricted', () => {
		cy.visit('www.platzi.com')
		cy.reload(true) // Force cache clean
	})

	// That means only this test is going to run
	it.only('Navigate to previus page', () => {
		cy.visit('www.platzi.com')
		cy.visit('www.platzi.com/blog/')
		cy.go('back') // Nagivate to previus page (platzi)
	})
})
