// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDgzby0LDkwfnd6jt8aa1U6Z4OVAfraz2A",
    authDomain: "note-3-3c755.firebaseapp.com",
    databaseURL: "https://note-3-3c755.firebaseio.com",
    projectId: "note-3-3c755",
    storageBucket: "note-3-3c755.appspot.com",
    messagingSenderId: "234112031696",
    appId: "1:234112031696:web:7326fc2788b44a6c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//reference messages collection

let database = firebase.database()
let messagesRef = database.ref('pie');


let names = []

// Your web app's Firebase configuration




const button = document.querySelector(".d-button")
const dInput = document.querySelector('.d-input')
let a = document.createElement('H2')
console.log(dInput)
    button.addEventListener("click", function(){
        if(names.length === 20){
            alert('this event is full sorry pick a new one')
        }else{

                saveMessage(dInput.value)
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

messagesRef.on('value', function(snapShot){
   const  users = snapShot.val()
    document.getElementById('output').innerHTML = ''
   if(users){
    names = Object.keys(users)
    Object.keys(users).forEach((key) => {
         let text = users[key].name
         var h = document.createElement("H1")
                      // Create a <h1> element
         var t = document.createTextNode(`${text}`);     // Create a text node
         h.appendChild(t);
         document.getElementById('output').appendChild(h);
    })
  

   }
   

})