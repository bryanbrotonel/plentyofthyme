// set variables
var values = [];
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
            objects[i] = childChildSnapshot.val();
            values[i] = value.name + value.date;
            dates[i] = value.date;
            names[i] = value.name;
            i++;
          });
        });
      } else {

      }

      for (i = 0; i < objects.length; i++) {
        if (objects[i].expired.equals('yes')) {
          wasted += objects[i].price;
        }
      }
    });
  });

console.log(wasted);
