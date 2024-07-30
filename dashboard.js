import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { db } from "./firebasedatastore.js"

const blogForm = document.querySelector('.dashboard-form');
const dashboardInput = document.querySelector('.dashboard-input');
const dashboardTextArea = document.querySelector('.dashboard-textarea');
const renderText= document.querySelector('.my-blogs-render');



let arr = []

function renderData(){
    renderText.innerHTML = ""
    console.log(arr)
    arr.map((item)=>{
        renderText.innerHTML = `
        <div class = "under-rendering">
            <div class = "under-title">
                <img width = "50px" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt = "img">
                <P>${item.title}</P>
            </div>
            <div>
                 <p>${item.text}</p>
            </div>
                
            
        </div>
`
    })
}

blogForm.addEventListener('submit' , async (e)=>{
    e.preventDefault();

    arr.push({
        title : dashboardInput.value,
        text : dashboardTextArea.value
    })


    try {
        const docRef = await addDoc(collection(db, "users"), {
            title : dashboardInput.value,
            text : dashboardTextArea.value
        });
        renderData()
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }


})
