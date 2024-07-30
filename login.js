import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";

const loginForm = document.querySelector('#login-form')
const loginEmail = document.querySelector('.email-login')
const loginPassword = document.querySelector('.password-login')


loginForm.addEventListener('submit' , (e)=>{
    e.preventDefault();

    if(loginEmail.value === '' || loginPassword.value === ''){
        alert('Please fill in all the fields')
        return;
    }

    



    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    alert('login successfully!')
    window.location = "./blogs.html"

  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    alert('please enter correct email and password')
  });


})