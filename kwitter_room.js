var firebaseConfig = {
    apiKey: "AIzaSyCn4mzUihsTAYFQi9r8dRRJ6mUigVYY_6U",
    authDomain: "kwitter-like-twitter.firebaseapp.com",
    databaseURL: "https://kwitter-like-twitter-default-rtdb.firebaseio.com",
    projectId: "kwitter-like-twitter",
    storageBucket: "kwitter-like-twitter.appspot.com",
    messagingSenderId: "37076135348",
    appId: "1:37076135348:web:580bf24cd989919474d6e1",
    measurementId: "G-EN079V5R3Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  function addroom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
          
          
    })
;

  localStorage.setItem("room_name",room_name);
  window.location="kwitter_room.js"
  }
  function data(){
    firebase.database().ref("/").on('value'),
     function(snapshot) {
       document.getElementById("output").innerHTML = "";
       snapshot.forEach(
         function(childSnapshot) {
           childKey  = childSnapshot.key;
  }
document.getElementById(output).innerHTML+="row";
getData()

function redirectToRoomName(name){
  localStorage.setitem("room_name",room_name)
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
}