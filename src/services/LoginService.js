import userService from "./UserService";


class LoginService {
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.userAuthenticated = this.userAuthenticated.bind(this);
  }

  login(email, password) {
    return userService.getUsers().then((users) => {
      for (const user of users) {
        if (user.email === email && user.password === password) {
          user.password = ''; // never save pwd in local storage
          localStorage.setItem('user', JSON.stringify(user));
          return true;
        }
      }
      return false;
    })
  }

  logout() {
    localStorage.removeItem('user');
  }

  isAuthenticated() {
    return localStorage.getItem('user') !== null;
  }

  userAuthenticated() {
    return JSON.parse(localStorage.getItem('user'));
  }

  isAdult() {
    return this.userAuthenticated().role === 'adult';
  }
}

export default new LoginService();
