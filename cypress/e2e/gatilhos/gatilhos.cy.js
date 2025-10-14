import LoginPage from '../../pages/login/loginPage';
import GatilhosPage from '../../pages/gatilhos/gatilhos';

describe('Gatilhos', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('12644194067', 'Teste1010!');
  });

  it('gatilho home pedir cartão de crédito', () => {
    GatilhosPage.clicarPedirCartao();
    cy.contains('Mais detalhes').should('be.visible');
    cy.screenshot('Mais detalhes');
  });

  it('gatilho home pedir empréstimo', () => {
    GatilhosPage.clicarPedirEmprestimo();
    cy.contains('Você simulou').should('be.visible'); 
    cy.screenshot('Você simulou');
  });

  it('gatilho serviço cartões e empréstimos', () => {
    GatilhosPage.clicarServicos();
    GatilhosPage.clicarCartoesEmprestimos();
    cy.contains('Pedir cartão').should('be.visible');
    cy.screenshot('Pedir cartão')
  });

  it('gatilho serviços acompanhar meus pedidos', () => {
    GatilhosPage.clicarServicos();
    cy.get('a[href*="meus-pedidos"]') 
     .invoke('removeAttr', 'target') 
     .click();
    cy.contains('Detalhes').should('be.visible');
    cy.screenshot('Meus pedidos')
  });
  

  it('gatilho dívidas Ver todas as ofertas', () => {
    GatilhosPage.clicarCentralDividas();
    cy.contains('Ver todas as ofertas').click();
    cy.contains('Pedir cartão').should('be.visible');

  });

  it('gatilho dívidas simule empréstimo de até 150 mil', () => {
    GatilhosPage.clicarCentralDividas();
    cy.contains('Simule empréstimos de até').click()
    cy.contains('Pedir emprestimo').should('be.visible'); 
  });
});