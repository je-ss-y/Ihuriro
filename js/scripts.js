// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAhgvRKrcHIlfmkTtojizNW4GVT5u_A4oU",
  authDomain: "ihuri2.firebaseapp.com",
  databaseURL: "https://ihuri2.firebaseio.com",
  projectId: "ihuri2",
  storageBucket: "",
  messagingSenderId: "101867079535",
  appId: "1:101867079535:web:b3d7fc1fd9257917"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function signUp(){
    var email = document.getElementById("textEmail").value;
    var password = document.getElementById("textPassword").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){window.open("about.html",'_self')}).catch(function(error) {
     console.log(error.message);
    });
  }
  // document.getElementById("btnSignUp").addEventListener('click', e=>{
  //   var firstName = document.getElementById("textfirstname").value;
  //   var lastName = document.getElementById("textlastname").value;

  // })
  function postMyComment(){
    
    // var usersRef = ref.child("comment");
    var holdText = document.getElementById("myComment").value;
    var obj = {userText: holdText};
    // usersRef.set(obj);
    firebase.database().ref('/Comments').push(obj).then(function(){alert("success")}).catch(function(error) {
      console.log(error.code);
     });
    firebase.database().ref("UserData").orderByKey();
    var userDataRef = firebase.database().ref("UserData").orderByKey();
userDataRef.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();              // childData will be the actual contents of the child

      var name_val = childSnapshot.val().Name;
      var id_val = childSnapshot.val().AssignedID;
      document.getElementById("name").innerHTML = name_val;
      document.getElementById("id").innerHTML = id_val;
  });
 });
}
