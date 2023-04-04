import HomeServiceFB from "./firebase/HomeServiceFB";

class HomeService {

  constructor() {
    this.service = HomeServiceFB
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
