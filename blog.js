import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import { auth } from "./config.js"

const logoutBtn = document.querySelector('.logout-blog')

logoutBtn.addEventListener('click' , (e)=>{
    e.preventDefault()

    signOut(auth).then(() => {
        window.location = "./index.html"
        alert('logout successfully!')
      }).catch((error) => {
        console.log(error);
      });
})


onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
        window.location = './index.html'
    }
  });