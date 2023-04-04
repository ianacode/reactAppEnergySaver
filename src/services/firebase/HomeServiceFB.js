import { db } from '../../firebase';
import { ref, child, get } from "firebase/database";

class HomeServiceFB {

    async getHome(homeId) {
        console.log("getHome", homeId);
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, `homes`))
        if (snapshot.exists()) {
            console.log(snapshot.val());
            return snapshot.val()
        }
        console.log("No data available");
        throw Error("No data available")
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