// access to firebase users
firebase.auth().onAuthStateChanged(function(user) {
    var itemRef = firebase.database().ref('users/' + user.uid);
    itemRef.once('value', function(snapshot) {
      if (snapshot.val() != null) {
        snapshot.forEach(function(childSnapshot) {
          childSnapshot.forEach(function(childChildSnapshot) {
            var li = document.createElement('li');
            value = childChildSnapshot.val();
            values[i] = value.name + value.date;
            dates[i] = value.date;
            names[i] = value.name;
            i++;
