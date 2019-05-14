// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBtAIaRUUUAObt4kutj0B4TkvuzxM7rFlI",
    authDomain: "mom-2-8c7c3.firebaseapp.com",
    databaseURL: "https://mom-2-8c7c3.firebaseio.com",
    projectId: "mom-2-8c7c3",
    storageBucket: "mom-2-8c7c3.appspot.com",
    messagingSenderId: "705698950670",
    appId: "1:705698950670:web:537d20f47a314bd2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//reference messages collection

let messagesRef = firebase.database().ref('name');


const names = []

// Your web app's Firebase configuration




const button = document.querySelector(".d-button")
const dInput = document.querySelector('.d-input')
let a = document.createElement('H2')
console.log(dInput)
    button.addEventListener("click", function(){
        if(names.length === 15){
            alert('this event is full sorry pick a new one')
        }else{
            names.push(dInput.value)

                var h = document.createElement("H1")
                text = names.slice(-1)[0]               // Create a <h1> element
                var t = document.createTextNode(`${text}`);     // Create a text node
                h.appendChild(t);
                document.body.appendChild(h);

                saveMessage(name)
                console.log(names)       
        }
       
    })

   


//save message to firebse

function saveMessage(name){
    let newNameref = messagesRef.push();
    newNameref.set({
        name: name,
    })
}