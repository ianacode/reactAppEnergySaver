import userService from "./UserService";


class LoginService {
  user = null;

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
          this.user = user;
          return true;
        }
      }
      return false;
    })
  }

  logout() {
    this.user = null;
  }

  isAuthenticated() {
    return this.user !== null;
  }

  userAuthenticated() {
    return this.user;
  }

  isAdult() {
    return this.user.role === 'adult';
  }
}

export default new LoginService();
