describe('Navigation', () => {
  it('should navigate to the projects page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "projects" and click it
    cy.get('a[href*="projects"]').click()

    // The new url should include "/projects"
    cy.url().should('include', '/projects')

    // The new page should contain an h1 with "Projects"
    cy.get('h1').contains('Projects')
  })
  it('Should navigate to the Experience page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="experience"]').click()
    cy.url().should('include', '/experience')
    cy.get('h1').contains('Experience')
  })
  it('should navigate to the home page from NavBar', () => {
    cy.visit('http://localhost:3000/projects')
    cy.get('[data-testid="menu-button"]').click()
    cy.get('[data-testid="HOME"]').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('h1').contains('Misato Seki')
  })
  it('should navigate to the projects page from NavBar', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="menu-button"]').click()
    cy.get('[data-testid="PROJECTS"]').click()
    cy.url().should('include', '/projects')
    cy.get('h1').contains('Projects')
  })
  it('should navigate to the Experience page from NavBar', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="menu-button"]').click()
    cy.get('[data-testid="EXPERIENCE"]').click()
    cy.url().should('include', '/experience')
    cy.get('h1').contains('Experience')
  })
})
