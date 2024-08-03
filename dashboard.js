import { collection, addDoc ,getDocs,Timestamp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { db } from "./firebasedatastore.js"

import { signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js"



const blogForm = document.querySelector('.dashboard-form');
const dashboardInput = document.querySelector('.dashboard-input');
const dashboardTextArea = document.querySelector('.dashboard-textarea');
const logoutBtn = document.querySelector('.logout-blog')
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

async function getRenderData(){
    const querySnapshot = await getDocs(collection(db, "blogs"));
    querySnapshot.forEach((doc) => {
    arr.push(doc.data())
});
    renderData()
}

getRenderData()

function renderData(){
    dashboardInput.value = ""
    dashboardTextArea.value = ""
    renderText.innerHTML = "";
    arr.map((item)=>{
        let formattedDate = "N/A"; // Default value if time is not available
        if(item.time){
            const date = item.time.toDate();
            formattedDate = date.toLocaleString('en-us' ,{
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            })
        }
        renderText.innerHTML += `
        <div class = "under-rendering">
            <div class = "under-title">
                <p>User Name : ${item.Name} ${item.last}  || ${formattedDate}</p>
            <div>
                <h4>${item.title}</h4>
             </div>
            </div>
            <div class ="under-p">
                 <p class ="under">${item.text}</p>
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
        last : lastName,
        time: Timestamp.fromDate(new Date()),

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



logoutBtn.addEventListener('click' , (e)=>{
    e.preventDefault()

    signOut(auth).then(() => {
        window.location = "./index.html"
        alert('logout successfully!')
      }).catch((error) => {
        console.log(error);
      });
})