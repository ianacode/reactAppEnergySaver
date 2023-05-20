import userService from "./UserService";
import homeService from "./HomeService";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut
} from "firebase/auth";
import {auth} from "../firebase";
import store from '../store';

class LoginService {


  constructor() {
    this.login = this.login.bind(this);
    this.loginWithGoogle = this.loginWithGoogle.bind(this);
    this.register = this.register.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.googleProvider = new GoogleAuthProvider();
  }

  async login(email, password) {
    return this.loginWithUserCredential(await signInWithEmailAndPassword(auth, email, password));
  }

  async loginWithGoogle() {
    return this.loginWithUserCredential(await signInWithPopup(auth, this.googleProvider));
  }

  async register(email, password, displayName, photoURL) {
    let userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName, photoURL })
    return this.loginWithUserCredential(userCredential);
  }

  async logout() {
    await signOut(auth);
  }

  isAuthenticated() {
    return store.getState().loggedUser.currentUser !== null;
  }

  async loginWithUserCredential(userCredential) {
    const email = userCredential.user.email;
    // check is user exists in db
    let user = await userService.getUserByEmail(email);
    if (!user || !user.id) {
      // if do not in db, create home and user
      const home = {
        owner_id: userCredential.user.uid,
      };
      await homeService.addHome(home)
      const parts = userCredential.user.displayName.split(' ');
      user = {
        id: userCredential.user.uid,
        email: email,
        first_name: parts[0] || "unknown",
        last_name: parts[1] || "unknown",
        img: userCredential.user.photoURL,
        role: 'adult',
        home_id: home.id,
      }
      await userService.addUser(user);
    }
    return user;
  }
}

export default new LoginService();
