var weekcalendar = document.getElementById('calendar');
var week1 = document.createElement('table');
var week2 = document.createElement('table');

var caption1 = document.createElement('caption');
var caption2 = document.createElement('caption');
var tomorrow = new Date();

tomorrow.setDate(tomorrow.getDate());

caption1.appendChild(document.createTextNode('Week of ' + tomorrow.toDateString()));

var days_tr = document.createElement('tr');
var spots_tr = document.createElement('tr');
var days2_tr = document.createElement('tr');
var spots2_tr = document.createElement('tr');
var alt = 0;

for (var i = 0; i < 7; i++) {
  var day = document.createTextNode(tomorrow.toDateString());
  var th = document.createElement('th');
  if (alt == 0) {
    th.setAttribute('class', 'week_o');
    alt++;
  } else {
    th.setAttribute('class', 'week');
    alt = 0;
  }
  th.appendChild(day)
  days_tr.appendChild(th);
  tomorrow.setDate(tomorrow.getDate() + 1);
}

alt = 0;
for (var i = 0; i < 7; i++) {
  var td = document.createElement('td');
  td.setAttribute('id', 'exp' + i);
  if (alt == 0) {
    td.setAttribute('class', 'food_o');
    alt++;
  } else {
    td.setAttribute('class', 'food');
    alt = 0;
  }
  spots_tr.appendChild(td);
}

caption2.appendChild(document.createTextNode('Week of ' + tomorrow.toDateString()));

alt = 0;
for (var i = 0; i < 7; i++) {
  var day = document.createTextNode(tomorrow.toDateString());
  var th = document.createElement('th');
  if (alt == 0) {
    th.setAttribute('class', 'week_o');
    alt++;
  } else {
    th.setAttribute('class', 'week');
    alt = 0;
  }
  th.appendChild(day)
  days2_tr.appendChild(th);
  tomorrow.setDate(tomorrow.getDate() + 1);
}

alt = 1;
for (var i = 7; i < 14; i++) {
  var td = document.createElement('td');
  td.setAttribute('id', 'exp' + i);
  if (alt == 0) {
    td.setAttribute('class', 'food');
    alt++;
  } else {
    td.setAttribute('class', 'food_o');
    alt = 0;
  }
  spots2_tr.appendChild(td);
}

week1.appendChild(caption1);
week1.appendChild(days_tr);
week1.appendChild(spots_tr);

week2.appendChild(caption2);
week2.appendChild(days2_tr);
week2.appendChild(spots2_tr);


weekcalendar.appendChild(week1);
weekcalendar.appendChild(week2);
