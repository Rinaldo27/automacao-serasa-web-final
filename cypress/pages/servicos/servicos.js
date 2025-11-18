class servicos {

clicarCartoesEmprestimos() {
    cy.contains('Cartões e empréstimos').click();
    }
acompanharMeusPedidos() {
    cy.get('a[href*="meus-pedidos"]') 
     .invoke('removeAttr', 'target') 
     .click();
}

}

export default new servicos ();