// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD6Dkj_XwjktukHoJNj9U7EJ_9W6RQsGeo",
    authDomain: "ihuriro-a79d9.firebaseapp.com",
    databaseURL: "https://ihuriro-a79d9.firebaseio.com",
    projectId: "ihuriro-a79d9",
    storageBucket: "",
    messagingSenderId: "1046180308670",
    appId: "1:1046180308670:web:30468d53728afead"
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
 function myFunction(){
   location.replace("directIt");
 }