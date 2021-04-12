
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDh6vNG3AIlbb3ft6zNKtQ7SCcrPzuHbG0",
      authDomain: "kwitter-183ec.firebaseapp.com",
      projectId: "kwitter-183ec",
      storageBucket: "kwitter-183ec.appspot.com",
      messagingSenderId: "464121478953",
      appId: "1:464121478953:web:d8dfd29f4d03f551104138"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Group_name = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room name' id="+Room_names+" onclick'redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
