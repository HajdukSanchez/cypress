describe('Elements interaction', () => {
	describe('Button interaction', () => {
		before(() => {
			cy.visit('/buttons') // Visit buttons page
		})

		it('Should click "Click me" button and show the message', () => {
			// Get button with index 3 (In cypress elements start from 1, not from 0)
			cy.get('button').eq(3).click() // Interaction with the specific button
			cy.get('#dynamicClickMessage').should('be.visible').and('contain', 'You have done a dynamic click') // Verify if the message is visible and contains the text
		})

		it('Should double click "Double click me" button and show the message', () => {
			cy.get('#doubleClickBtn').dblclick()
			cy.get('#doubleClickMessage').should('be.visible').and('contain', 'You have done a double click')
		})

		it('Should force click', () => {
			cy.visit('/dyamic-properties')
			cy.get('#enableAfter').click({ timeout: 0, force: true }) // The button will be enable after 5 seconds, so for avoid errors we use force: true, to click the button
		})

		it('Should click by position', () => {
			cy.visit('/buttons')
			cy.get('button').eq(3).parent().parent().click('topRight')
			cy.get('button').eq(3).parent().parent().click(10, 20)
		})
	})

	describe('Input text interaction', () => {
		before(() => {
			cy.visit('/automation-practice-form')
		})

		it('Should fill "First Name" and "Second name"', () => {
			cy.get('#firstName').type('Jozek')
			cy.get('#lastName').type('Hajduk')
		})

		it('Should clean "First Name" and "Second name" text', () => {
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

		it('Should radio button checked', () => {
			cy.get('#gender-radio-1').check({ force: true }) // This force is because the check is cover by a label, so we need to add this property
			// If check is cover by a label we can click the label
			cy.get('label[for="gender-radio-1"]').click() // Same behavior for the check without the force
		})

		it('Should checkbox checked and uncheck', () => {
			cy.get('label[for="hobbies-checkbox-1"]').check()
			cy.get('label[for="hobbies-checkbox-1"]').uncheck() // Un check
		})
	})

	describe('Extract info and make interaction', () => {
		before(() => {
			cy.visit('/automation-practice-form')
		})

		it('Should the "First Name" is equal to Jozek', function () {
			const fieldText = 'Jozek'

			cy.get('#fisrtName').as('name') // Alias
			cy.get('@name').type(fieldText) // Reference to the alias

			cy,
				get('@name').then(($name) => {
					expect($name.val()).to.equal(fieldText) // Verify if the value is equal to Jozek
				})

			cy.get('@name').invoke('val').as('globalName') // Invoke the value function to get the value of name an save it as a globalName variable
		})

		it('Should share info between test', function () {
			// This way is the recomendeed one for Cypress
			// Other way is to add a globla variable to sabe this name
			cy.get('#fisrtName').type(this.globalName) // Get the value of globalName
		})
	})

	describe('Select element interaction', () => {
		it('Should interact with dropdown', () => {
			cy.visit('https://itera-qa.azurewebsites.net/home/automation')
			cy.get('.custom-select').select(10) // Select the option with index 10
		})

		it('Should the option 3 has the value 3', () => {
			cy.get('.custom-select').select('3').should('have.value', '3')
		})

		it('Should Grecce have the value 4', () => {
			cy.get('.custom-select').select('Greece').should('have.value', '4')
		})

		it('Should select red option on the list ', () => {
			cy.visit('https://react-select.com/home')
			cy.get('#react-select-6-input').type(' ')
			cy.get('#react-select-6-listbox')
				.children()
				.children()
				.each(($element, index, $list) => {
					if ($element.text() === 'Red') {
						$element.click()
					}
				})
		})

		it('Should select the 3 element of the list', () => {
			cy.get('#react-select-6-option-3').click()
		})
	})

	describe('Tables and interaction', () => {
		before(() => {
			cy.visit('https://www.w3schools.com/html/html_tables.asp')
		})

		it('Should get table info', () => {
			cy.get('#customers')
				.find('th')
				.each(($element) => {
					cy.log($element.text())
				})
		})

		it('Should first table title equal to Company', () => {
			cy.get('#customers').find('th').first().invoke('text').should('equal', 'Company')
		})

		it('Should table title index 1 equal to Contact', () => {
			cy.get('#customers').find('th').eq(1).invoke('text').should('equal', 'Contact')
		})

		it('Should last table title equal to Country', () => {
			cy.get('#customers').find('th').last().invoke('text').should('equal', 'Country')
		})
	})

	describe('Date picker interaction', () => {
		before(() => {
			cy.visit('https://material.angular.io/components/datepicker/overview')
		})

		it.only('Should interact with input date picker', () => {
			cy.get('#mat-input-0').type('11/03/2022')
		})
	})

	describe('Popups and tooltips interaction', () => {
		it('Should toggle modal', () => {
			cy.visit('/modal-dialogs')
			cy.get('#showSmallModal').click()
			cy.get('#closeSmallModal').click()
		})

		it('Should confirm alert message', () => {
			cy.visit('/alerts')

			const stub = cy.stub()
			cy.on('window:confirm', stub) // Intercept user confirm action (in the alert)
			cy.get('#confirmButton')
				.click()
				.then(() => {
					expect(stub.getCall(0)).to.be.calledWith('Do you confirm action ?')
				}) // Fisrt way

			cy.on('window:confirm', (confirm) => {
				expect(confirm).to.equal('Do you confirm action ?')
			}) // Second way (shortter)
			cy.contains('You selected Ok').should('exist') // Validate the element exist
		})

		it('Should decline alert message', () => {
			cy.on('window:confirm', (confirm) => {
				expect(confirm).to.equal('Do you confirm action ?')
				return false
			})
			cy.contains('You selected Cancel').should('exist')
		})

		it('Should tooltip works and toogle', () => {
			cy.visit('/tool-tips')
			cy.get('#tooltipButton').trigger('mouseover')
			cy.contains('You hovererd over the button').should('exist')

			cy.get('#tooltipButton').trigger('mouseout')
			cy.contains('You hovererd over the button').should('not.exist')
		})
	})

	describe('Drag and Drop interaction', () => {
		before(() => {
			cy.visit('/dragabble')
		})

		it('Should drag with an object', () => {
			cy.get('#dragBox')
				.trigger('mousedown', { which: 1, pageX: 600, pageY: 300 })
				.trigger('mousemove', { which: 1, pageX: 600, pageY: 600 })
				.trigger('mouseup')
		})
	})
})
