import userService from "./UserService";
import loginService from "./LoginService";

class HomeService {
  getHome() {
    const homeId = loginService.userAuthenticated().home_id
    return fetch(`http://localhost:3001/homes/${homeId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  }

  addHome(home) {
    return fetch('http://localhost:3001/homes', {
      method: 'POST',
      body: JSON.stringify(home),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
  }

  updateHome(home) {
    return fetch(`http://localhost:3001/homes/${home.id}`, {
      method: 'PUT',
      body: JSON.stringify(home),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
  }

  deleteHome(id) {
    return fetch(`http://localhost:3001/homes/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
  }
}

export default new HomeService();
