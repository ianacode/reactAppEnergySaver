import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

// import { db } from './firebase';
//
// import { ref, child, get, set, query, equalTo } from "firebase/database";
//
// //get user with specific key
// const dbRef = ref(db);
// const userId = 2
// get(child(dbRef, `users/${userId}`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });
//
//
// const members = query(ref(db, 'homes'), equalTo(1));
// console.log(members);
//



// //get members with specific home_id

// const homesRef = collection(db, "homes");
// const q = query(homesRef, where("id", "==", 1));
// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   console.log(doc.id, " => ", doc.data());
// });

// async function getHome(homeId) {
//   const homesRef = collection(db, "homes");
//   const q = query(homesRef, where("id", "==", homeId));

//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
//   });
// }
// getHome(1);




//
//
// // get list of users
// get(child(dbRef, `users/`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });
//
// // get list of homes
// get(child(dbRef, `homes/`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });
//
//
// // add user with a specific ID
// function writeUserData(userId, name, email, imageUrl) {
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture: imageUrl
//   });
// }
// writeUserData(5, "Leo555", "fdfd@sdsd.ru", null);
//



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
