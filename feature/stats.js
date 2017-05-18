// set variables
// var values = [];
var objects = [];
var wasted = 0;

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

      }

      console.log(i);
      i = 0;
      console.log(i);
      for (i = 0; i < objects.length; i++) {
        if (objects[i].expired.equals('yes')) {
          wasted += objects[i].price;
        }
      }
    });
  });

console.log(wasted);
