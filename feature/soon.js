// get elements
var list = document.getElementById('list');
var header = document.getElementById('forgetHeader');
var itemDay;
var itemMonth;
var itemYear;
var totalItemDays;
var objects = [];
var today = new Date();
today.setDate(today.getDate());
var day = today.getDate();
var month = today.getMonth();
var year = today.getYear();
var totalDays = parseFloat(day) + parseFloat((month + 1) * 30.5) + parseFloat(year * 365);
var i = 0;
var check = 0;
firebase.auth().onAuthStateChanged((user) => {
  database = firebase.database().ref('users/' + user.uid);

  database.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      childSnapshot.forEach(function(childChildSnapshot) {
        objects[i] = childChildSnapshot.val();
        i++;
      });
    });
    for (i = 0; i < objects.length; i++) {
      itemDate = objects[i].date.charAt(8) + objects[i].date.charAt(9);
      itemMonth = objects[i].date.charAt(5) + objects[i].date.charAt(6);
      itemYear = objects[i].date.substring(0, 4);
      totalItemDays = parseFloat(30.5 * itemMonth) + parseFloat(itemDate) + parseFloat((itemYear - 1900) * 365);
      if (totalItemDays - totalDays <= 2 && totalItemDays - totalDays > 0) {
        list.appendChild(document.createTextNode(objects[i].name + ' expires on ' + objects[i].date + '!'));
        list.appendChild(document.createElement('br'));
        check++;
      }
    }
    if (check == 0) {
      header.innerText = 'Nothing to worry about!';
      list.appendChild(document.createTextNode('... for now...'));
      list.appendChild(document.createElement('br'));

    }
    list.appendChild(document.createElement('br'));
  });
});
