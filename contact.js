// app.js
// Import specific functions from the Firebase SDK version 9
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js';

// Replace with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCR8FfTUGjiSXgN2XzSHjN9owwrbOX-Uss",
    authDomain: "oauth-ebafa.firebaseapp.com",
    projectId: "oauth-ebafa",
    storageBucket: "oauth-ebafa.appspot.com",
    messagingSenderId: "657639756347",
    appId: "1:657639756347:web:a3f1de3c56e42a45da821e"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Reference to the Firestore database
const db = getFirestore(firebaseApp);

const send = document.getElementById("send");

send.addEventListener("click", ()=>{
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const problem = document.getElementById('problem').value;

    // Add the user's information to the Firestore database
    addDoc(collection(db, 'queries'), {
        name: name,
        email: email,
        problem: problem
    })
    .then(() => {
        alert('Query submitted successfully!');
        // You can add additional logic or redirect the user after submission
    })
    .catch((error) => {
        console.error('Error adding document: ', error);
        alert('An error occurred. Please try again.');
    });

})

const textarea = document.getElementById('problem');

textarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

