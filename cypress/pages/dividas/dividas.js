class dividas {

ofertasCartão() {
    cy.contains('Ver todas as ofertas').click();
}

simuleEmprestimo() {
    cy.contains('Simule empréstimos de até').click();
}
         
}

export default new dividas ();