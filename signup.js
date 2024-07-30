import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js"

const firstName = document.querySelector('.first-name')
const signUpForm = document.querySelector('#signup-form')
const lastName = document.querySelector('.last-name')
const email = document.querySelector('.email-signup')
const password= document.querySelector('.password-signup')
const confirmPassword = document.querySelector('.confirm-password')

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if( email.value === '' || password.value === '' || confirmPassword.value === '' || firstName.value === '' || lastName.value === ''){
        alert('please fill this')
        return
    }

    if(password.value !== confirmPassword.value){
      alert('Passwords do not match')
      return;
   }



    createUserWithEmailAndPassword(auth, email.value, password.value,confirmPassword.value,firstName.value,lastName.value)
  .then((userCredential) => {
    
    const user = userCredential.user;

    console.log(user);
    alert('User created successfully!')



    window.location = "./login.html"
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });


})