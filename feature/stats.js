// set variables
// var values = [];
var objects = [];
var totalWasted = 0; // money wasted stat
var dairyWasted = 0;
var produceWasted = 0;
var meatWasted = 0;
var miscWasted = 0;
var itemsWasted = 0;

// access to firebase users
firebase.auth().onAuthStateChanged(function(user) {
  var database = firebase.database().ref('users/' + user.uid);
  database.once('value', function(snapshot) {
    i = 0;
    if (snapshot.val() != null) {
      snapshot.forEach(function(childSnapshot) {
        childSnapshot.forEach(function(childChildSnapshot) {
          console.log(i);
          objects[i] = childChildSnapshot.val();
          // values[i] = objects[i].name + objects[i].date;
          i++;
        });
      });
    } else {
      ;
    }

    i = 0;

    // total money wasted
    for (i = 0; i < objects.length; i++) {
      if (objects[i].expired === ('yes')) {
        totalWasted += objects[i].price;
      }
    }
  });
});

console.log(totalWasted);
