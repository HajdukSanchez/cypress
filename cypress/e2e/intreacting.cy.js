describe('Elements interaction', () => {
	describe('Button interaction', () => {
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

	describe('Input text interaction', () => {
		before(() => {
			cy.visit('/automation-practice-form')
		})

		it('should fill "First Name" and "Second name"', () => {
			cy.get('#firstName').type('Jozek')
			cy.get('#lastName').type('Hajduk')
		})

		it('should clean "First Name" and "Second name" text', () => {
			cy.get('#firstName').type('{selectAll}{backspace}')
			cy.get('#lastName').type('{selectAll}{backspace}')
			cy.get('#firstName').type('Jozek')
			cy.get('#firstName').clear() // Another way to clean the Input text
		})
	})

	describe('Radio button and checkbox interaction', () => {
		before(() => {
			cy.visit('/automation-practice-form')
		})

		it('should radio button checked', () => {
			cy.get('#gender-radio-1').check({ force: true }) // This force is because the check is cover by a label, so we need to add this property
			// If check is cover by a label we can click the label
			cy.get('label[for="gender-radio-1"]').click() // Same behavior for the check without the force
		})

		it('should checkbox checked and uncheck', () => {
			cy.get('label[for="hobbies-checkbox-1"]').check()
			cy.get('label[for="hobbies-checkbox-1"]').uncheck() // Un check
		})
	})

	describe('Extract info and make interaction', () => {
		before(() => {
			cy.visit('/automation-practice-form')
		})

		it('should the "First Name" is equal to Jozek', function () {
			const fieldText = 'Jozek'

			cy.get('#fisrtName').as('name') // Alias
			cy.get('@name').type(fieldText) // Reference to the alias

			cy,
				get('@name').then(($name) => {
					expect($name.val()).to.equal(fieldText) // Verify if the value is equal to Jozek
				})

			cy.get('@name').invoke('val').as('globalName') // Invoke the value function to get the value of name an save it as a globalName variable
		})

		it('should share info between test', function () {
			// This way is the recomendeed one for Cypress
			// Other way is to add a globla variable to sabe this name
			cy.get('#fisrtName').type(this.globalName) // Get the value of globalName
		})
	})
})
