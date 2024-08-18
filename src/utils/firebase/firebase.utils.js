import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBs2zNsHmLQQ0jnVKGkLw47Xl04J_Ivpw",
  authDomain: "crwn-clothing-db-bc453.firebaseapp.com",
  projectId: "crwn-clothing-db-bc453",
  storageBucket: "crwn-clothing-db-bc453.appspot.com",
  messagingSenderId: "158520470590",
  appId: "1:158520470590:web:3d0ca12a3295a4a00d356f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);