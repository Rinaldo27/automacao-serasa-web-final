class gatilhosHome {

  clicarPedirCartao() {
     cy.get('[aria-label="Ver ofertas de cartão de crédito"]').click()
  }

  clicarPedirEmprestimo() {
    cy.get('[data-testid="icon-request-credit"]').click();
  }

  clicarServicos() {
    cy.get(':nth-child(5) > .jsx-ee76df5701ce7f51').click();
  }

  clicarCentralDividas() {
    cy.get('a[href="/area-cliente/central-dividas"]').click();
  }
}

export default new gatilhosHome ();