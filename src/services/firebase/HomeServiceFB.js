import { db } from '../../firebase';
import {ref, get, child, query, orderByChild, equalTo} from "firebase/database";

class HomeServiceFB {

    async getHome(homeId) {
      // get home from firebase db filtering by name
      console.log("getHome", homeId);
      const dbRef = ref(db);
      const homesRef = child(dbRef, "homes");
      // filter by name
      const orderedRef =  query(homesRef, orderByChild("id"), equalTo(""+homeId));
      const snapshot = await get(orderedRef);
      if (snapshot.exists()) {
        const results = snapshot.val()
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
        return {};
    }

    async updateHome(home) {
        console.log("updateHome", home);
        return {};
    }

    async deleteHome(id) {
        console.log("deleteHome", id);
        return {};
    }

}

export default new HomeServiceFB();
