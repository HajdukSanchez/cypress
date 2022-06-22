describe('Save elements', () => {
	before(() => {
		cy.visit('/automation-practice-form')
	})

	it('Save element', () => {
		// We get the form and we can use them inside the callback
		cy.get('input[placeholder="First Name"]')
			.parents('form')
			.then((form) => {
				const inputs = form.find('input') // We get all the inputs of the form
				const divs = form.find('div') // We get all the divs of the form
				const labels = form.find('label') // We get all the labels of the form

				expect(inputs.length).to.equal(15) // We check that there are 15 inputs
				expect(divs.length).to.equal(70) // We check that there are 70 inputs
				expect(labels.length).to.equal(16) // We check that there are 16 inputs
			})
	})
})
