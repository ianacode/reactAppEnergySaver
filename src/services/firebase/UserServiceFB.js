import {child, equalTo, get, orderByChild, query, ref, remove, push, update} from "firebase/database";
import {db} from "../../firebase";
import { v4 as uuidv4 } from 'uuid';

class UserServiceFB {

  users = child(ref(db), "users");

  async getByID(id) {
    return await get(query(this.users,
      orderByChild("id"),
      equalTo(id)));
  }

  async getUserByEmail(email) {
    console.log("getUserByEmail", email);
    const snapshot = await get(query(this.users,
      orderByChild("email"),
      equalTo(email)));
    const results = Object.values(snapshot.val())
    if (results.length > 0) {
      console.log("getUserByEmail", results[0]);
      return results[0];
    }
    console.log("No data available");
    return {};
  }

  async getMembers(homeId) {
    console.log("getMembers", homeId);
    const snapshot = await get(query(this.users,
      orderByChild("home_id"),
      equalTo(homeId)));
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    console.log("No data available");
    return [];
  }

  async getUser(id) {
    console.log("getUser", id);
    const snapshot = await this.getByID(id);
    const results = Object.values(snapshot.val())
    console.log(results)
    if (results.length > 0) {
      console.log("getUser", results[0]);
      return results[0];
    }
    console.log("No data available");
    return {};
  }

  async addUser(user) {
    console.log("addUser", user);
    user.id = uuidv4();
    await push(this.users, user);
  }

  async updateUser(user) {
    console.log("updateUser", user);
    const snapshot = await this.getByID(user.id);
    snapshot.forEach((childSnapshot) => {
      update(childSnapshot.ref, user);
    });
  }

  async deleteUser(id) {
    console.log("deleteUser", id);
    const snapshot = await this.getByID(id);
    snapshot.forEach((childSnapshot) => {
      remove(childSnapshot.ref);
    });
  }
}

export default new UserServiceFB();
