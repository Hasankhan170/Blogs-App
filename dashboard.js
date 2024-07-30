import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { db } from "./firebasedatastore.js"

const blogForm = document.querySelector('.dashboard-form');
const dashboardInput = document.querySelector('.dashboard-input');
const dashboardTextArea = document.querySelector('.dashboard-textarea');
const renderTitle = document.querySelector('.randar-title');
const renderTextArea = document.querySelector('.randar-textcontent');






blogForm.addEventListener('submit' , async (e)=>{
    e.preventDefault();

    // console.log(dashboardInput.value);
    // console.log(dashboardTextArea.value);


    try {
        const docRef = await addDoc(collection(db, "users"), {
            title : dashboardInput.value,
            text : dashboardTextArea.value
        });
        console.log(title);
        console.log(text);

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }


})
