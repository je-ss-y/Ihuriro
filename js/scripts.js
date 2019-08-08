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
  function logIn(){
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){window.open("about.html",'_self')}).catch(function(error) {
     console.log(error.message);
    });
  }


  function myComment(){
    
    var holdText = document.getElementById("myComment").value;
    var obj = {userText: holdText};
    firebase.database().ref('/Comments').push(obj).then(function(){alert("success")}).catch(function(error) {
      console.log(error.code);
     });
    }
  
    $(document).ready(function(){
      var ref = firebase.database().ref('/Comments');
      ref.on('value', function(snapshot) {
        snapshot.forEach(function(item) {
          var childData = item.val();
          $("#addcommenthere").append("<p>" + childData.userText + "</p>")
          console.log(childData.userText);
        });
      });
    });



    function myPost(){
    
      var postText = document.getElementById("myPost").value;
      var obj1 = {userText: postText};
      firebase.database().ref('/Posts').push(obj1).then(function(){alert("success")}).catch(function(error) {
        console.log(error.code);
       });
      }
    
      $(document).ready(function(){
        var ref = firebase.database().ref('/Posts');
        ref.on('value', function(snapshot) {
          snapshot.forEach(function(allPosts) {
            var childData = allPosts.val();
            $("#addpostHere").append("<h4>" + childData.userText + "</h4>")
            console.log(childData.userText);
          });
        });
        $('#addpostHere').remove();
      });