import loginPage from '../../pages/login/loginPage';
import dividas from '../../pages/dividas/dividas';
import servicos from '../../pages/servicos/servicos';
import gatilhosHome from '../../pages/gatilhosHome/gatilhosHome';

describe('Gatilhos', () => {
  beforeEach(() => {
    cy.visit('https://serasa.dev/entrar?product=portal&redirectUrl=%2Farea-cliente%2F');
    loginPage.login('77681791027', 'Jr211294!');
  });

  it('Gatilho home pedir cartão de crédito', () => {
    gatilhosHome.clicarPedirCartao();
    cy.contains('Filtrar').should('be.visible');
    cy.screenshot('Filtrar');
  });

  it('Gatilho home pedir empréstimo', () => {
    gatilhosHome.clicarPedirEmprestimo();
    cy.contains('Você simulou').should('be.visible'); 
    cy.screenshot('Você simulou');
  });

  it('Gatilho serviço cartões e empréstimos', () => {
    gatilhosHome.clicarServicos();
    servicos.clicarCartoesEmprestimos();
    cy.contains('Pedir cartão').should('be.visible');
    cy.screenshot('Pedir cartão')
  });

  it('Gatilho serviços acompanhar meus pedidos', () => {
    gatilhosHome.clicarServicos();
    servicos.acompanharMeusPedidos();
    cy.contains('Recentes').should('be.visible');
   
  });

  it('Gatilho dívidas Ver todas as ofertas', () => {
    gatilhosHome.clicarCentralDividas();
    dividas.ofertasCartão();
    cy.contains('Pedir cartão').should('be.visible');

  });

  it('Gatilho dívidas simule empréstimo de até 150 mil', () => {
    gatilhosHome.clicarCentralDividas();
    dividas.simuleEmprestimo();
    cy.contains('Pedir emprestimo').should('be.visible'); 
  });
});