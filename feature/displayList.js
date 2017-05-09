
var user1;
var name;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    user1 = firebase.auth().currentUser;
    name = user1.uid;
    var starCountRef = firebase.database().ref('users/' + firebase.auth().currentUser.uid);
    starCountRef.on('value', function(snapshot) {
      console.log(snapshot.val());
    });
    console.log(name);
  } else {
    window.location.href='login.html';
  }
});



// Get elements
const uiList = document.getElementById('list');
user1 = firebase.auth().currentUser;
