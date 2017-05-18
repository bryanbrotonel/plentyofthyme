window.onload = function start() {
  document.getElementById('week').setAttribute("class", "container");
  document.getElementById('biweek').setAttribute("class", "hidden");
  document.getElementById('month').setAttribute("class", "hidden");
}

function week() {
  document.getElementById('week').setAttribute("class", "container");
  document.getElementById('biweek').setAttribute("class", "hidden");
  document.getElementById('month').setAttribute("class", "hidden");
}

function biweek() {
  document.getElementById('week').setAttribute("class", "hidden");
  document.getElementById('biweek').setAttribute("class", "container");
  document.getElementById('month').setAttribute("class", "hidden");
}

function month() {
  document.getElementById('week').setAttribute("class", "hidden");
  document.getElementById('biweek').setAttribute("class", "hidden");
  document.getElementById('month').setAttribute("class", "container");
}

function mobileweek() {
  document.getElementById('week').setAttribute("class", "visible");
  document.getElementById('biweek').setAttribute("class", "hidden");
  document.getElementById('month').setAttribute("class", "hidden");
}

function mobilebiweek() {
  document.getElementById('week').setAttribute("class", "hidden");
  document.getElementById('biweek').setAttribute("class", "visible");
  document.getElementById('month').setAttribute("class", "hidden");
}

function mobilemonth() {
  document.getElementById('week').setAttribute("class", "hidden");
  document.getElementById('biweek').setAttribute("class", "hidden");
  document.getElementById('month').setAttribute("class", "visible");
}
