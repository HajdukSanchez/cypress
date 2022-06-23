describe('Assertions', { browser: '!chrome' }, () => {
	before(() => {
		cy.visit('/automation-practice-form')
	})

	beforeEach(() => {
		cy.url().should('include', 'demoqa.com')
	})

	afterEach(() => {
		cy.url().should('include', 'demoqa.com')
	})

	after(() => {
		cy.visit('/')
	})

	// Assertion 1
	it('should input "First name" is visible 1', () => {
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

	// Debugg
	it('should console log a debuug', () => {
		cy.task('log', 'debugg')
	})

	it('should log a message', () => {
		cy.pause() // Pause the execution like a debugger breakpoint
		cy.log('This is a message to log')
		cy.get('#firstName').should('be.visible').and('have.attr', 'placeholder', 'First Name').debug()
	})
})
