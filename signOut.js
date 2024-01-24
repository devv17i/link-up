import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import 'https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCR8FfTUGjiSXgN2XzSHjN9owwrbOX-Uss",
    authDomain: "oauth-ebafa.firebaseapp.com",
    projectId: "oauth-ebafa",
    storageBucket: "oauth-ebafa.appspot.com",
    messagingSenderId: "657639756347",
    appId: "1:657639756347:web:a3f1de3c56e42a45da821e"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  // Import Firebase Auth separately
  import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js';

  // Get the Auth instance
  const auth = getAuth(firebaseApp);

  // Function to handle sign-out
  function signOut() {
      auth.signOut().then(() => {
          // Sign-out successful.
          console.log("User signed out successfully");
          // Redirect to the index.html page
          window.location.href = "./index.html";
      }).catch((error) => {
          // An error happened.
          console.error("Error during sign-out:", error);
      });
  }

document.getElementById('signOut').addEventListener("click", signOut)