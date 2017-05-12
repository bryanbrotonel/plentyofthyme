
var user1;
var name;
var btnSubmit = document.getElementById('btnSubmit');
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
      if (snapshot.val() != null) {
        uiList.setAttribute('class', 'container');
        uiList.innerText = '\n' + JSON.stringify(snapshot.val(), null, 2) + '\n\n';
        console.log(snapshot.val());
      } else {
        uiList.setAttribute('class', 'center container');
        uiList.innerText = '\nYou have nothing in your fridge yet!'  + '\n\n';
        console.log(snapshot.val());
      }
    });
    console.log(name);
  } else {
    window.location.href='login.html';
  }
});
