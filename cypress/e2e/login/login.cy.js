import LoginPage from '../../pages/loginPage';

describe('Login Serasa', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('deve logar com CPF válido e acessar a área do cliente', () => {
    LoginPage.login('12644194067', 'Teste1010!');
    cy.contains('Oi, Validação').should('be.visible');
  });
});
