describe('Appointment Scheduling Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/home/agendar-consulta');
    cy.findByRole('heading', { name: /Preencha o formulário abaixo para agendar sua consulta/i }).should('be.visible')
  })
  it('should fill form and send request successfully', () => {

    cy.findByTestId("name").type('Ash');
    cy.findByTestId("lastName").type('Ketchum');

    cy.findByTestId("select-input-region").click();
    cy.findAllByTestId("select-input-option-region").first().click();

    cy.findByTestId("select-input-city").click();
    cy.findAllByTestId("select-input-option-city").first().click();

    cy.findByTestId("select-input-pokemon").click();
    cy.findAllByTestId("select-input-option-pokemon").first().click();

    cy.findByTestId("select-input-date").click();
    cy.findAllByTestId("select-input-option-date").first().click();

    cy.findByTestId("select-input-time").click();
    cy.findAllByTestId("select-input-option-time").first().click();

    cy.findByTestId("submit").click();

    expect(cy.findByTestId("feedback-container")).to.exist;
  })

  it('should fill form and show text input errors', () => {

    cy.findByTestId("select-input-pokemon").click();
    cy.findAllByTestId("select-input-option-pokemon").first().click();

    cy.findByTestId("submit").click();

    cy.findAllByTestId("text-input-error").should('have.length', 2);
    cy.findAllByTestId("select-input-error").should('have.length', 4);
  })

  it('should enable submit button after select at least one pokemon', () => {

    cy.findByTestId("select-input-pokemon").click();
    cy.findAllByTestId("select-input-option-pokemon").first().click();

    cy.findByTestId("submit").should('be.enabled');
  })

  it('should add new pokemon to the team', () => {

    cy.findByTestId("add-select").should('be.visible').click();

    cy.findAllByTestId("select-input-pokemon").should('have.length', 2);
  })

  it('should delete pokemon from team', () => {

    cy.findByTestId("add-select").should('be.visible').click();
    cy.findByTestId("delete-select").should('be.visible').click();

    cy.findAllByTestId("select-input-pokemon").should('have.length', 1);
  })

  it('should show fill form and fail the request', () => {

    cy.intercept('POST', 'http://localhost:3000/api/scheduling/schedule', {
      statusCode: 400,
      body: {
        message: 'error'
      }
    }).as('schedule');

    cy.findByTestId("name").type('Ash');
    cy.findByTestId("lastName").type('Ketchum');

    cy.findByTestId("select-input-region").click();
    cy.findAllByTestId("select-input-option-region").first().click();

    cy.findByTestId("select-input-city").click();
    cy.findAllByTestId("select-input-option-city").first().click();

    cy.findByTestId("select-input-pokemon").click();
    cy.findAllByTestId("select-input-option-pokemon").first().click();

    cy.findByTestId("select-input-date").click();
    cy.findAllByTestId("select-input-option-date").first().click();

    cy.findByTestId("select-input-time").click();
    cy.findAllByTestId("select-input-option-time").first().click();

    cy.findByTestId("submit").click();

    expect(cy.findByTestId("feedback-container")).to.exist;
  })
});
