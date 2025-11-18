import LoginPage from '../../pages/login/loginPage';

describe('Login Serasa', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('deve logar com CPF válido e acessar a área do cliente', () => {
    LoginPage.login('77681791027', 'Jr211294!');
    cy.contains('Pedir cartão de crédito').should('be.visible');
  });
});
