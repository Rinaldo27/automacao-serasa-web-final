class LoginPage {
  visit() {
    cy.visit('https://serasa.dev/entrar?product=portal&redirectUrl=%2Farea-cliente%2F');
  }

  preencherCPF(cpf) {
    cy.get('input[name="cpf"]').type(cpf);
  }

  clicarContinuar() {
    cy.get('button.btn-submit').click();
  }

  preencherSenha(senha) {
    cy.get('#current-password').type(senha);
  }

  clicarEntrar() {
    cy.get('button.btn-submit').click();
  }

  login(cpf, senha) {
    this.preencherCPF(cpf);
    this.clicarContinuar();
    this.preencherSenha(senha);
    this.clicarEntrar();
  }
}

export default new LoginPage();
