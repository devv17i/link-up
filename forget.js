import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js';

// Replace with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCR8FfTUGjiSXgN2XzSHjN9owwrbOX-Uss",
    authDomain: "oauth-ebafa.firebaseapp.com",
    projectId: "oauth-ebafa",
    storageBucket: "oauth-ebafa.appspot.com",
    messagingSenderId: "657639756347",
    appId: "1:657639756347:web:a3f1de3c56e42a45da821e"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

document.getElementById('resetPassword').addEventListener('click', () => {
    const email = document.getElementById('forgotEmail').value;

    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Password reset email sent! Check your inbox.');
        })
        .catch((error) => {
            console.error('Error sending password reset email: ', error.message);
            alert('An error occurred. Please try again.');
        });
});