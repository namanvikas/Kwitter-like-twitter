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

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send(){
      msg=document.getElementById("msg").value;
      firebase.database.ref("room_name").push({
        name:user_name,message:msg,like:0
 })
 function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
  }
  getdata()

  function logout(){
      localStorage.removeItem(user_name);
      localStorage.removeItem(room_name);
window.location="index.html";
  }