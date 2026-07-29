import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOJwiVff2D0KhfH3P14NT2q5c8dqLg9l8",
  authDomain: "ms-shopping-30823.firebaseapp.com",
  databaseURL: "https://ms-shopping-30823-default-rtdb.firebaseio.com",
  projectId: "ms-shopping-30823",
  storageBucket: "ms-shopping-30823.firebasestorage.app",
  messagingSenderId: "119548068283",
  appId: "1:119548068283:web:4751f1df379b13fe76c49e",
  measurementId: "G-185W4CLL57"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };