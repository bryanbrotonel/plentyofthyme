
var user1;
var name;
var btnSubmit = document.getElementById('ihatejs');
console.log(btnSubmit);

btnSubmit.addEventListener('click', e => {
  window.location.href='cart.html';
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    user1 = firebase.auth().currentUser;

    // Get elements
    const uiList = document.getElementById('list');
    user1 = firebase.auth().currentUser;
    var itemRef = firebase.database().ref('users/' + user1.uid).child('items');
    itemRef.on('value', function(snapshot) {
      snapshot.val();
      console.log(snapshot.val());
    });
    console.log(name);
  } else {
    window.location.href='login.html';
  }
});
