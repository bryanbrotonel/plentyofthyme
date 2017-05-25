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

function parse(str) {
    if(!/^(\d){8}$/.test(str)) return "invalid date";
    var y = str.substr(0,4),
        m = str.substr(4,2),
        d = str.substr(6,2);
    return new Date(y,m,d);
}

function toWeekday(date) {
  switch (date.getDay()) {
    case 0:
      return 'Sunday';
      break;
    case 1:
      return 'Monday';
      break;
    case 2:
      return 'Tuesday';
      break;
    case 3:
      return 'Wednesday';
      break;
    case 4:
      return 'Thursday';
      break;
    case 5:
      return 'Friday';
      break;
    case 6:
      return 'Saturday';
      break;
    default:
      return null;
      break;
  }
}

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
        console.log(itemMonth);
        itemMonth -= 1;
        itemMonth = '0' + itemMonth;
        var date = parse(itemYear + itemMonth + itemDate);
        list.appendChild(document.createTextNode(objects[i].name + ' expires on ' + toWeekday(date) + '!'));
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
