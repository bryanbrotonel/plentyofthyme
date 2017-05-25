// Set variables
var calendar = document.getElementById('mainCalendar');
var cntnr = document.getElementById('cntnr2');
var month = document.createElement('ul');
var days = document.createElement('ul');
var m1 = document.createElement('li');
var m2 = document.createElement('li');
var m3 = document.createElement('li');
var year = document.createElement('span');
var tomorrow = new Date();
var date = new Date();
var y = date.getFullYear();
var m = date.getMonth();
var firstDay = new Date(y, m, 1);
var lastDay = new Date(y, m + 1, 0);

month.setAttribute('class', 'month');
days.setAttribute('class', 'days');
days.setAttribute('id', 'dayy');
tomorrow.setDate(tomorrow.getDate());

// set up m1, left button
m1.appendChild(document.createTextNode('<'));
m1.setAttribute('class', 'btn waves-effect waves-light');
m1.setAttribute('id', 'prev');
m1.setAttribute('style', 'background-color:black; opacity:0.6;');

// set up m2, right button
m2.appendChild(document.createTextNode('>'));
m2.setAttribute('class', 'btn waves-effect waves-light');
m2.setAttribute('id', 'next');
m2.setAttribute('style', 'background-color:black; opacity:0.6;');

// Updates calendar based on month
function refreshCalendar() {
  console.log('HELLO');
  month.removeChild(m1);
  month.removeChild(m2);
  month.removeChild(m3);
  m3 = document.createElement('li');
  monthString();
  m3.appendChild(document.createElement('br'));
  year = document.createElement('span');
  year.appendChild(document.createTextNode(y));
  year.setAttribute('style', 'font-size:18px');
  m3.appendChild(year);
  month.appendChild(m3);
  month.appendChild(m1);
  month.appendChild(m2);

  lastDay = new Date(y, m + 1, 0);
  document.getElementById('dayy').remove();
  days = document.createElement('ul');
  days.setAttribute('class', 'days');
  days.setAttribute('id', 'dayy');

  for (var i = 1; i <= lastDay.getDate(); i++) {
    var li = document.createElement('li');
    li.setAttribute('id', i);
    if (i == tomorrow.getDate()) {
      var active1 = document.createElement('span');
      active1.setAttribute('class', 'active');
      active1.appendChild(document.createTextNode(i));
      li.appendChild(active1);
    } else {
      li.appendChild(document.createTextNode(i));
    }
    days.appendChild(li);
  }
  cntnr.insertBefore(days, weekcalendar);
}

// converts month to string and appends to m3, header
function monthString() {
  switch (m) {
    case 0:
      m3.appendChild(document.createTextNode('January'));
      break;
    case 1:
      m3.appendChild(document.createTextNode('February'));
      break;
    case 2:
      m3.appendChild(document.createTextNode('March'));
      break;
    case 3:
      m3.appendChild(document.createTextNode('April'));
      break;
    case 4:
      m3.appendChild(document.createTextNode('May'));
      break;
    case 5:
      m3.appendChild(document.createTextNode('June'));
      break;
    case 6:
      m3.appendChild(document.createTextNode('July'));
      break;
    case 7:
      m3.appendChild(document.createTextNode('August'));
      break;
    case 8:
      m3.appendChild(document.createTextNode('September'));
      break;
    case 9:
      m3.appendChild(document.createTextNode('October'));
      break;
    case 10:
      m3.appendChild(document.createTextNode('November'));
      break;
    case 11:
      m3.appendChild(document.createTextNode('December'));
      break;
    default:
      break;
  }
}

// set up m3
year.appendChild(document.createTextNode(tomorrow.getFullYear()));
year.setAttribute('style', 'font-size:18px');
monthString();
m3.appendChild(document.createElement('br'));
m3.appendChild(year);

// add to month
month.appendChild(m3);
month.appendChild(m1);
month.appendChild(m2);

for (var i = 1; i <= lastDay.getDate(); i++) {
  var li = document.createElement('li');
  li.setAttribute('id', i);

  // set active date
  if (i == tomorrow.getDate()) {
    var active1 = document.createElement('span');
    active1.setAttribute('class', 'active');
    active1.appendChild(document.createTextNode(i));
    li.appendChild(active1);
  } else {
    li.appendChild(document.createTextNode(i));
  }
  days.appendChild(li);
}

calendar.appendChild(month);
var divA = document.createElement('div');
divA.setAttribute('class', 'month');
divA.appendChild(month);
calendar.appendChild(divA);
calendar.appendChild(days);

// add event listeners
m1.addEventListener('click', e => {
  console.log('true');
  m = m - 1;
  if (m < 0) {
    m = 11;
    y--;
  }
  refreshCalendar();
  console.log(m);
});

m2.addEventListener('click', e => {
  console.log('false');
  m = m + 1;
  if (m == 12) {
    m = 0;
    y++;
  }
  refreshCalendar();
  console.log(m);
});

// Set variables
var weekcalendar = document.getElementById('calendar');
var week1 = document.createElement('table');
var week2 = document.createElement('table');

var caption1 = document.createElement('caption');
var caption2 = document.createElement('caption');
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate());

var days_tr = document.createElement('tr');
var spots_tr = document.createElement('tr');
var days2_tr = document.createElement('tr');
var spots2_tr = document.createElement('tr');
var alt = 0;

caption1.appendChild(document.createTextNode('Week of ' + tomorrow.toDateString()));

// Create dates
for (var i = 0; i < 7; i++) {
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var month = document.createTextNode(month[tomorrow.getMonth()]);
  var day = document.createTextNode(tomorrow.getDate());
  var th = document.createElement('th');

  // styling
  if (alt == 0) {
    th.setAttribute('class', 'week_o');
    alt++;
  } else {
    th.setAttribute('class', 'week');
    alt = 0;
  }
  th.appendChild(month)
  th.appendChild(day)
  days_tr.appendChild(th);
  tomorrow.setDate(tomorrow.getDate() + 1);
}

alt = 0;

// creates food slots
for (var i = 0; i < 7; i++) {
  var td = document.createElement('td');
  td.setAttribute('id', 'exp' + i);

  // styling
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

// creates dates 2
for (var i = 0; i < 7; i++) {
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var month = document.createTextNode(month[tomorrow.getMonth()]);
  var day = document.createTextNode(tomorrow.getDate());
  var th = document.createElement('th');

  // styling
  if (alt == 0) {
    th.setAttribute('class', 'week_o');
    alt++;
  } else {
    th.setAttribute('class', 'week');
    alt = 0;
  }
  th.appendChild(month)
  th.appendChild(day)
  days2_tr.appendChild(th);
  tomorrow.setDate(tomorrow.getDate() + 1);
}

alt = 1;
// creates spots 2
for (var i = 7; i < 14; i++) {
  var td = document.createElement('td');
  td.setAttribute('id', 'exp' + i);

  // styling
  if (alt == 0) {
    td.setAttribute('class', 'food');
    alt++;
  } else {
    td.setAttribute('class', 'food_o');
    alt = 0;
  }
  spots2_tr.appendChild(td);
}

// add elements to document
week1.appendChild(caption1);
week1.appendChild(days_tr);
week1.appendChild(spots_tr);

week2.appendChild(caption2);
week2.appendChild(days2_tr);
week2.appendChild(spots2_tr);

weekcalendar.appendChild(week1);
weekcalendar.appendChild(week2);
