const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})



  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
 

  const firebaseConfig = {
    apiKey: "AIzaSyCR8FfTUGjiSXgN2XzSHjN9owwrbOX-Uss",
    authDomain: "oauth-ebafa.firebaseapp.com",
    projectId: "oauth-ebafa",
    storageBucket: "oauth-ebafa.appspot.com",
    messagingSenderId: "657639756347",
    appId: "1:657639756347:web:a3f1de3c56e42a45da821e"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  // auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();

  const googleLogin = document.getElementById("goole-login-button");
  googleLogin.addEventListener("click", function(){
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt:'select_account',
    });
    signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "./main.html";
  }).catch((error) => {
   
    const errorCode = error.code;
    const errorMessage = error.message;
console.log("signup error:",errorCode,errorMessage);
    
  });
  })

  const googleSignIn = document.getElementById("goole-signIn-button");
  googleSignIn.addEventListener("click", function(){
   
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt:'select_account',
    });
    signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "main.html";
  }).catch((error) => {
   
    const errorCode = error.code;
    const errorMessage = error.message;
console.log("signin error:",errorCode,errorMessage);
    
  });
  })
  console.log("loaded2");
  document.getElementById("sign").addEventListener("click", ()=>{
    console.log("loaded1");
    const email = document.getElementById('email1').value;
    const password = document.getElementById('password1').value;
    const confirmpassword = document.getElementById('confirmpassword1').value;
  
    if(password!==confirmpassword){
      console.error("password and confirmpassword do not match")
      alert("password and confirmpassword do not match")
    }
    
  
   console.log("loaded1");
  createUserWithEmailAndPassword(auth,email,password)
 
  .then((userCredential)=>{
    console.log("haha");
    const user = userCredential.user
    console.log("user signed up",user);
    alert("user signed up ");
    document.getElementById('form').reset();
    window.location.href = 'main.html'
  }  
  )
  .catch((error)=>{
  const errorCode = error.code;
  const errorMessage = error.message;
  console.error("signup error",errorCode,errorMessage);
  }
  
  )
  console.log("signup function executed"); 
  } )

document.getElementById("userin").addEventListener("click", ()=>{
    const email2 = document.getElementById("email2").value;
    const password2 = document.getElementById("password2").value;
    signInWithEmailAndPassword(auth,email2,password2)
    .then((userCredential)=>{
      const user = userCredential.user;
      console.log("user signed in",user);
      alert("user signed in");
      window.location.href = "main.html";
    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("signup error",errorCode,errorMessage);
      })
  }
)
  // const user = auth.currentUser;

  // function updateUserProfile(user){
  //   const userName = user.displayName;
  //   const userEmail = user.email;
  //   const userProfilePicture = user.photoURL;
  //   console.log(userEmail);

  //   document.getElementById("userName").textContent = userName;
  //   document.getElementById("userEmail").textContent = userEmail;
  //   document.getElementById("userProfilePicture").src = userProfilePicture;

  // }

  // onAuthStateChanged(auth, (user) =>{
  //   if (user){
  //     updateUserProfile(user);
  //     const uid = user.uid;
  //     return uid;

  //   }else{
  //     alert("create account and login");
  //   }
  // });

  // function updateUserProfile(user){
  //   const userName = user.displayName;
  //   const userEmail = user.email;
  //   const userProfilePicture = user.photoURL;


  // }

  // updateUserProfile()





