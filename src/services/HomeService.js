import HomeServiceIDB from "./ldb/HomeServiceIDB";

class HomeService {

  constructor() {
    this.service = HomeServiceIDB
  }
  getHome(homeId) {
    return this.service.getHome(homeId);
  }

  addHome(home) {
    return this.service.addHome(home);
  }

  updateHome(home) {
    return this.service.updateHome(home);
  }

  deleteHome(id) {
    return this.service.deleteHome(id);
  }
}

export default new HomeService();
