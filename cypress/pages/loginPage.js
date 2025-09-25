class LoginPage {
  visitar() {
    cy.visit('https://serasa.dev/entrar?product=portal&redirectUrl=%2Farea-cliente%2F');
  }

  preencherCPF(cpf) {
    cy.get('input[name="cpf"]').type(cpf);
    cy.get('button.btn-submit').click();
  }

  clicarEntrarComSenha() {
    cy.contains('Entrar com senha').click();
  }

  preencherSenha(senha) {
    cy.get('#current-password').type(senha);
  }

  enviar() {
    cy.get('button.btn-submit').click();
  }

  login(cpf, senha) {
    this.preencherCPF(cpf);
    this.clicarEntrarComSenha();
    this.preencherSenha(senha);
    this.enviar();
  }
}

export default new LoginPage();
