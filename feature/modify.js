// Declare variables
var buttons = []; //
var values = []; // unique ids of each item in database
var objects = []; // json objects
var difference;
var expDate = 'exp';
var i = 0;
var database;

// get current user
firebase.auth().onAuthStateChanged((user) => {
  database = firebase.database().ref('users/' + user.uid)

  // Set up date
  var itemDate;
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate());

  // Extract item and objects id's from database
  database.once('value', function(snapshot) {

    i = 0; // initialize i;
    snapshot.forEach(function (childSnapshot) {
      childSnapshot.forEach(function (childChildSnapshot) {
        objects[i] = childChildSnapshot.val(); // stores each json object
        values[i] = objects[i].name +objects[i].date; // stores unique item id
        i++;
      });
    });

    // adds each object to calendar if it expires within 2 weeks
    for (i = 0; i < objects.length; i++) {
      expDate = 'exp'
      itemDate = objects[i].date.charAt(8) + objects[i].date.charAt(9);
      difference = (itemDate - tomorrow.getDate());
      expDate = expDate + (itemDate - tomorrow.getDate());
      if (difference >= 0 && difference <= 13) {
        // realtime update?
        // document.getElementById(expDate).remove();
        // document.createElement('');

        // add to calendar
        document.getElementById(expDate).appendChild(document.createTextNode(objects[i].name));
        document.getElementById(expDate).appendChild(document.createElement('br'));
      }
    }
  });
});
