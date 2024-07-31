import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { db } from "./firebasedatastore.js"

const blogForm = document.querySelector('.dashboard-form');
const dashboardInput = document.querySelector('.dashboard-input');
const dashboardTextArea = document.querySelector('.dashboard-textarea');
const renderText= document.querySelector('.my-blogs-render');
const firstName = localStorage.getItem('name')
const lastName = localStorage.getItem('last')

if(!firstName){
    alert("First name not found. Please sign up again.");
}
if(!lastName){
    alert("last name not found. Please sign up again.");
}

let arr = []

function renderData(){
    dashboardInput.value = ""
    dashboardTextArea.value = ""
    renderText.innerHTML = "";
    console.log(arr)
    arr.map((item)=>{
        renderText.innerHTML = `
        <div class = "under-rendering">
            <div class = "under-title">
                <img width = "50px" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt = "img">
                <p>User Name : ${item.Name} ${item.last}</p>
            <div>
                <h4>${item.title}</h4>
             </div>
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

    const newBlog = {
        title : dashboardInput.value,
        text : dashboardTextArea.value,
        Name : firstName,
        last : lastName
    }

    arr.push(newBlog)


    try {
        const docRef = await addDoc(collection(db, "blogs") , newBlog);
        renderData()
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }


})
