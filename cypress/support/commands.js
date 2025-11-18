

Cypress.Commands.add('loginSerasa', (cpf, senha) => {
  cy.get('input[name="cpf"]').type(cpf);
  cy.get('button.btn-submit').click();
  cy.contains('Entrar com senha').click();
  cy.get('#current-password').type(senha);
  cy.get('button.btn-submit').click();
});



