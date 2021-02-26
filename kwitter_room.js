var firebaseConfig = {
      apiKey: "AIzaSyAjCQB9AmZHJ6SvKOckaYOe2hnTNwLCydA",
      authDomain: "kwitter-7ac90.firebaseapp.com",
      databaseURL: "https://kwitter-7ac90-default-rtdb.firebaseio.com",
      projectId: "kwitter-7ac90",
      storageBucket: "kwitter-7ac90.appspot.com",
      messagingSenderId: "1086783340190",
      appId: "1:1086783340190:web:bd31176430f038d0cf858f",
      measurementId: "G-8Z5KFQRTDG"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
