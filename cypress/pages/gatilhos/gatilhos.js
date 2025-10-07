class GatilhosPage {

  clicarPedirCartao() {
    cy.get('[data-testid="icon-credit-card"]').parents('a').click();
  }

  clicarPedirEmprestimo() {
    cy.get('[data-testid="icon-request-credit"]').click();
  }

  clicarServicos() {
    cy.get(':nth-child(5) > .jsx-ee76df5701ce7f51').click();
  }

  clicarCartoesEmprestimos() {
    cy.contains('Cartões e empréstimos').click();
  }

  clicarMeusPedidos() {
    cy.get(':nth-child(3) > .jsx-19dc676c0a18396b > .eu-sm-3 > .jsx-767c0911b385f4b5 > [target="_blank"]').click();
  }

  clicarCentralDividas() {
    cy.get('a[href="/area-cliente/central-dividas"]').click();
  }
}

export default new GatilhosPage();