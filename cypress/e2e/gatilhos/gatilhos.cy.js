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
    cy.contains('Alterar simulação').should('be.visible'); 
    cy.screenshot('Alterar simulação');
  });

  it('gatilho serviço cartões e empréstimos', () => {
    GatilhosPage.clicarServicos();
    GatilhosPage.clicarCartoesEmprestimos();
    cy.contains('Pedir cartão').should('be.visible');
    cy.screenshot('Pedir cartão')
  });

  it('gatilho serviços acompanhar meus pedidos', () => {
    GatilhosPage.clicarServicos();
    GatilhosPage.clicarMeusPedidos();
    cy.contains('Detalhes').should('be.visible');
  });

  it('gatilho dívidas Ver todas as ofertas', () => {
    GatilhosPage.clicarCentralDividas();
  });

  it('gatilho dívidas simule empréstimo de até 150 mil', () => {
    GatilhosPage.clicarCentralDividas();
  });
});