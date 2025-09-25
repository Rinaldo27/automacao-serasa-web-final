import LoginPage from '../../pages/loginPage';

describe('Gatilhos', () => {
  beforeEach(() => {
    LoginPage.visitar(); // Acessa a página de login
    LoginPage.login('04072506036', 'Homolog135!'); // Executa o login


  });
 
  it('deve redirecionar para o hall de cartão de crédito', () => {
    cy.get('[data-testid="icon-credit-card"]').should('be.visible').click();
    cy.url().should('include', '/area-cliente/solucoes/ofertas-credito?grouper=credit-card-hall');
    cy.contains('Cartão de crédito').should('be.visible'); 
 
  });
 
  it('deve redirecionar para o hall de empréstimo', () => {
    cy.get('[data-testid="icon-request-credit"]').should('be.visible').click();
    cy.url().should('include', '/area-cliente/solucoes/ofertas-credito?grouper=loan-hall');
    cy.contains('Pedir empréstimo').should('be.visible'); 
  });
 
  it('Gatilho serviço cartoes e emprestimo', () => {
    cy.get('a[href="/area-cliente/solucoes"]').click();
    cy.contains('div.content', 'flex').click();
    cy.get('button.card__main-btn').contains('Pedir cartão').should('be.visible');
  });
 
  it('deve redirecionar para a página de acompanhar meus pedidos', () => {
  
});
 
});
