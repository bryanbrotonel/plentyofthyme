
const btnCart = document.getElementById('btnCart');
const btnStats = document.getElementById('btnStats');
const btnCalendar = document.getElementById('btnCalendar');

btnCart.addEventListener('click', e => {
  window.location.href='groceryList.html';
});

btnStats.addEventListener('click', e => {
  window.location.href='stats.html';
});

btnCalendar.addEventListener('click', e => {
  window.location.href='calendar.html';
})
