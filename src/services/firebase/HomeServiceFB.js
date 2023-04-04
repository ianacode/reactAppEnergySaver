import {db} from '../../firebase';
import {child, equalTo, get, push, update, remove, orderByChild, query, ref, limitToLast} from "firebase/database";

class HomeServiceFB {
  homes = child(ref(db), "homes");

  async getByID(id) {
    return await get(query(this.homes,
      orderByChild("id"),
      equalTo("" + id)));
  }

  async getHome(homeId) {
    // get home from firebase db filtering by name
    console.log("getHome", homeId);
    // filter by name
    const snapshot = await this.getByID(homeId);
    if (snapshot.exists()) {
      const results = Object.values(snapshot.val())
      if (results.length > 0) {
        console.log("getHome", results[0]);
        return results[0];
      }
    }
    console.log("No data available");
    return {};
  }

  async addHome(home) {
    console.log("addHome", home);
    const snapshot = await get(query(this.homes,
      orderByChild("id"),
      limitToLast(1)));
    const results = Object.values(snapshot.val())
    if (results.length > 0) {
      home.id = results[0].id + 1;
    } else {
      home.id = 1;
    }
    await push(this.homes, home);
  }

  async updateHome(home) {
    console.log("updateHome", home);
    const snapshot = await this.getByID(home.id);
    snapshot.forEach((childSnapshot) => {
      update(childSnapshot.ref, home);
    });
  }

  async deleteHome(id) {
    console.log("deleteHome", id);
    const snapshot = await this.getByID(id);
    snapshot.forEach((childSnapshot) => {
      remove(childSnapshot.ref);
    });
  }
}

export default new HomeServiceFB();
