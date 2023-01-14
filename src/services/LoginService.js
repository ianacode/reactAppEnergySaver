import userService from "./UserService";


class LoginService {
  useAuthenticated = null;

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.userAuthenticated = this.userAuthenticated.bind(this);
  }

  login(username, password) {
    userService.getUsers().then((users) => {
      users.forEach((user) => {
        if (user.username === username && user.password === password) {
          this.useAuthenticated = user;
        }
      });
    })
  }

  logout() {
    this.useAuthenticated = null;
  }

  isAuthenticated() {
    return this.useAuthenticated !== null;
  }

  userAuthenticated() {
    return this.useAuthenticated;
  }
}

export default new LoginService();
