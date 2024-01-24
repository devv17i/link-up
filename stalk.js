import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCR8FfTUGjiSXgN2XzSHjN9owwrbOX-Uss",
    authDomain: "oauth-ebafa.firebaseapp.com",
    projectId: "oauth-ebafa",
    storageBucket: "oauth-ebafa.appspot.com",
    messagingSenderId: "657639756347",
    appId: "1:657639756347:web:a3f1de3c56e42a45da821e"
  };

  initializeApp(firebaseConfig);

  function storeUserProfile(user) {
    const db = getFirestore();
    const colRef = collection(db, 'userProfiles');

    addDoc(colRef, user)
        .then(() => {
            alert("User profile added to your stalklist");
        })
        .catch((error) => {
            console.error("Error adding user profile to Firebase:", error);
            alert("Error adding user profile to your stalklist");
        });
}

// Event listener for the "stalk" button
document.getElementById('add').addEventListener('click', function () {
    const userName = document.querySelector('[name="userName"]').textContent;
    const rating = document.querySelector('[name="rating"]').textContent;
    const maxRating = document.querySelector('[name="maxRating"]').textContent;
    const contribution = document.querySelector('[name="contribution"]').textContent;
    const country = document.querySelector('[name="country"]').textContent;
    const organisation = document.querySelector('[name="organisation"]').textContent;
    const userImage = document.querySelector('img').src; // Get the user image URL

    const userProfile = {
        userName,
        rating,
        maxRating,
        contribution,
        country,
        organisation,
        userImage, // Include the user image URL
    };

    storeUserProfile(userProfile);
});

