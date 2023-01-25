class UserServiceJSS {
  getUsers() {
    return fetch('http://localhost:3001/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
  };

  getMembers(homeId) {
    return fetch(`http://localhost:3001/users?home_id=${homeId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
  };

  getUser(id) {
    return fetch(`http://localhost:3001/users/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
  }

  addUser(user) {
    return fetch('http://localhost:3001/users', {
      method: 'POST',
      body: JSON.stringify(user),
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

  updateUser(user) {
    return fetch(`http://localhost:3001/users/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
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

  deleteUser(id) {
    return fetch(`http://localhost:3001/users/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
  }

  getUserByEmail(email) {
    return fetch(`http://localhost:3001/users?email=${email}`).then((response) => {
      return response.json();
    });
  }
}

export default new UserServiceJSS();

