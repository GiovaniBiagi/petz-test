describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('navigate to quem-somos route', () => {

    cy.findByRole('heading', { name: /Cuidamos bem do seu pokémon,/i }).should('be.visible')
    cy.findByRole('link', { name: /quem somos/i }).click().document().location().should((loc) => {
      expect(loc.pathname).to.eq('/home/quem-somos')
    })
  });

  it('navigate to agendar-consulta route', () => {
    cy.findByRole('heading', { name: /Cuidamos bem do seu pokémon,/i }).should('be.visible')
    cy.findByRole('link', { name: /agendar consulta/i }).click().document().location().should((loc) => {
      expect(loc.pathname).to.eq('/home/agendar-consulta')
    })
  })
})
