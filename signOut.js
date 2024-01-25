import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import 'https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js';


const firebaseConfig = {
    apiKey: "AIzaSyCR8FfTUGjiSXgN2XzSHjN9owwrbOX-Uss",
    authDomain: "oauth-ebafa.firebaseapp.com",
    projectId: "oauth-ebafa",
    storageBucket: "oauth-ebafa.appspot.com",
    messagingSenderId: "657639756347",
    appId: "1:657639756347:web:a3f1de3c56e42a45da821e"
  };

  const firebaseApp = initializeApp(firebaseConfig);


  import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js';


  const auth = getAuth(firebaseApp);


  function signOut() {
      auth.signOut().then(() => {

          console.log("User signed out successfully");

          window.location.href = "./index.html";
      }).catch((error) => {

          console.error("Error during sign-out:", error);
      });
  }

document.getElementById('signOut').addEventListener("click", signOut)
