
import LoginPage from '../../pages/loginPage';

describe('Login Serasa', () => {
  beforeEach(() => {
    LoginPage.visitar();
  });

  it('Login com Page Object', () => {
    LoginPage.login('04072506036', 'Homolog135!');
  });

})