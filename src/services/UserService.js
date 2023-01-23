import UserServiceIDB from "./ldb/UserServiceIDB";

class UserService {

  constructor() {
    this.service = UserServiceIDB
  }

  getUserByEmail(email) {
    return this.service.getUserByEmail(email);
  };

  getMembers(homeId) {
    return this.service.getMembers(homeId);
  };

  getUser(id) {
    return this.service.getUser(id);
  }

  addUser(user) {
    return this.service.addUser(user);
  }

  updateUser(user) {
    return this.service.updateUser(user);
  }

  deleteUser(id) {
    return this.service.deleteUser(id);
  }
}

export default new UserService();

