import LoginPage from '../../pages/login/loginPage';
import GatilhosPage from '../../pages/gatilhos/gatilhos';

describe('Gatilhos', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('77681791027', 'Jr211294!');
  });

  it('Gatilho home pedir cartão de crédito', () => {
    GatilhosPage.clicarPedirCartao();
    cy.contains('Filtrar').should('be.visible');
    cy.screenshot('Filtrar');
  });

  it('Gatilho home pedir empréstimo', () => {
    GatilhosPage.clicarPedirEmprestimo();
    cy.contains('Você simulou').should('be.visible'); 
    cy.screenshot('Você simulou');
  });

  it('Gatilho serviço cartões e empréstimos', () => {
    GatilhosPage.clicarServicos();
    GatilhosPage.clicarCartoesEmprestimos();
    cy.contains('Pedir cartão').should('be.visible');
    cy.screenshot('Pedir cartão')
  });

  it('Gatilho serviços acompanhar meus pedidos', () => {
    GatilhosPage.clicarServicos();
    cy.get('a[href*="meus-pedidos"]') 
     .invoke('removeAttr', 'target') 
     .click();
    cy.contains('Detalhes').should('be.visible');
    cy.screenshot('Meus pedidos')
  });

  it('Gatilho dívidas Ver todas as ofertas', () => {
    GatilhosPage.clicarCentralDividas();
    cy.contains('Ver todas as ofertas').click();
    cy.contains('Pedir cartão').should('be.visible');

  });

  it('Gatilho dívidas simule empréstimo de até 150 mil', () => {
    GatilhosPage.clicarCentralDividas();
    cy.contains('Simule empréstimos de até').click()
    cy.contains('Pedir emprestimo').should('be.visible'); 
  });
});