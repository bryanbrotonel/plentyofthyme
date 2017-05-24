// set variables
// var values = [];
var objects = [];
// var totalWasted = 0; // total money wasted this week stat
var weekWasted = 0; // this week's money wasted stat
var dairyWasted = 0; // this week's dairy waste
var produceWasted = 0; // this weeks produce waste
var meatWasted = 0; // this weeks meat waste
var miscWasted = 0; // this weeks misc waste

// var biTotalWasted = 0; // total money wasted this week stat
var biWeekWasted = 0; // this week's money wasted stat
var biDairyWasted = 0; // this week's dairy waste
var biProduceWasted = 0; // this weeks produce waste
var biMeatWasted = 0; // this weeks meat waste
var biMiscWasted = 0; // this weeks misc waste

// var moTotalWasted = 0; // total money wasted this week stat
var moWasted = 0; // this month's money wasted stat
var moDairyWasted = 0; // this month's dairy waste
var moProduceWasted = 0; // this month's produce waste
var moMeatWasted = 0; // this month's meat waste
var moMiscWasted = 0; // this month's misc waste

var itemsWasted = 0; // ??
var today = new Date();
today.setDate(today.getDate());
console.log(today.getDate());
console.log(today.getMonth());

// round numbers
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

// get elements
const weekDisplay = document.getElementById('weekTotal');
const weekTextDisplay = document.getElementById('weekTotalText');
const weekDairyMoney = document.getElementById('wkdairymoney');
const weekProduceMoney = document.getElementById('wkprodmoney');
const weekMeatMoney = document.getElementById('wkmamoney');
const weekMiscMoney = document.getElementById('wkmiscmoney');
const weekDairyPercent = document.getElementById('wkdairypercent');
const weekProducePercent = document.getElementById('wkprodpercent');
const weekMeatPercent = document.getElementById('wkmapercent');
const weekMiscPercent = document.getElementById('wkmiscpercent');

const biWeekDisplay = document.getElementById('biweekTotal');
const biWeekTextDisplay = document.getElementById('biweekTotalText');
const biWeekDairyMoney = document.getElementById('bwkdairymoney');
const biWeekProduceMoney = document.getElementById('bwkprodmoney');
const biWeekMeatMoney = document.getElementById('bwkmamoney');
const biWeekMiscMoney = document.getElementById('bwkmiscmoney');
const biWeekDairyPercent = document.getElementById('bwkdairypercent');
const biWeekProducePercent = document.getElementById('bwkprodpercent');
const biWeekMeatPercent = document.getElementById('bwkmapercent');
const biWeekMiscPercent = document.getElementById('bwkmiscpercent');

const moDisplay = document.getElementById('moTotal');
const moTextDisplay = document.getElementById('moTotalText');
const moDairyMoney = document.getElementById('modairymoney');
const moProduceMoney = document.getElementById('moprodmoney');
const moMeatMoney = document.getElementById('momamoney');
const moMiscMoney = document.getElementById('momiscmoney');
const moDairyPercent = document.getElementById('modairypercent');
const moProducePercent = document.getElementById('moprodpercent');
const moMeatPercent = document.getElementById('momapercent');
const moMiscPercent = document.getElementById('momiscpercent');


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
      ;
    }

    i = 0;

    // total money wasted
    // for (i = 0; i < objects.length; i++) {
    //   if (objects[i].expired === ('yes')) {
    //     // weekWasted += objects[i].price;
    //   }
    // }


    // this week's money wasted
    for (i = 0; i < objects.length; i++) {
      var date = objects[i].date.charAt(8) + objects[i].date.charAt(9);
      var month = (objects[i].date.charAt(5) + objects[i].date.charAt(6)) - 1;
      var year = objects[i].date.substring(0, 4);
      var todayInDays = today.getMonth() * 30.5 + today.getDate() + (today.getYear() * 365);
      var dateInDays = parseFloat((month * 30.5)) + parseFloat(date) + parseFloat((year - 1900) * 365);
      var difference = todayInDays - dateInDays;
      // console.log(todayInDays);
      // console.log(dateInDays);
      // console.log(difference);
      if ((difference) < 7 && (difference) >= 0) {
        if (objects[i].expired === ('yes')) {
          weekWasted += (objects[i].price * (1 - (objects[i].amountUsed / 100)));
          if (objects[i].category === ('dairy')) {
            dairyWasted += (objects[i].price * (1 - (objects[i].amountUsed / 100)));
          }
          if (objects[i].category === ('meats & alternatives')) {
            meatWasted += (objects[i].price * (1 - (objects[i].amountUsed / 100)));
          }
          if (objects[i].category === ('produce')) {
            produceWasted += (objects[i].price * (1 - (objects[i].amountUsed / 100)));
          }
          if (objects[i].category === ('miscellaneous')) {
            miscWasted += (objects[i].price * (1 - (objects[i].amountUsed / 100)));
          }
        }
      }

      if ((difference) < 14 && (difference) >= 0) {
        if (objects[i].expired === ('yes')) {
          biWeekWasted += (objects[i].price * (1 - (objects[i].amountUsed / 100)));
          if (objects[i].category === ('dairy')) {
            biDairyWasted += (objects[i].price * (1 - (objects[i].amountUsed / 100)));
          }
          if (objects[i].category === ('meats & alternatives')) {
            biMeatWasted += (objects[i].price * (1 - (objects[i].amountUsed / 100)));
          }
          if (objects[i].category === ('produce')) {
            biProduceWasted += (objects[i].price * (1 - (objects[i].amountUsed / 100)));
          }
          if (objects[i].category === ('miscellaneous')) {
            biMiscWasted += (objects[i].price * (1 - (objects[i].amountUsed / 100)));
          }
        }
      }

      if ((difference) <= 31 && (difference) >= 0) {
        if (objects[i].expired === ('yes')) {
          moWasted += (objects[i].price * (1 - (objects[i].amountUsed / 100)));
          if (objects[i].category === ('dairy')) {
            moDairyWasted += (objects[i].price * (1 - (objects[i].amountUsed / 100)));
          }
          if (objects[i].category === ('meats & alternatives')) {
            moMeatWasted += (objects[i].price * (1 - (objects[i].amountUsed / 100)));
          }
          if (objects[i].category === ('produce')) {
            moProduceWasted += (objects[i].price * (1 - (objects[i].amountUsed / 100)));
          }
          if (objects[i].category === ('miscellaneous')) {
            moMiscWasted += (objects[i].price * (1 - (objects[i].amountUsed / 100)));
          }
        }
      }
    }

    // display this week's money wasted
    weekDisplay.innerText = '$' + round(weekWasted, 2) + ' wasted this week';
    if (weekWasted == 0) {
      weekTextDisplay.innerText = 'Excellent work!';
    } else if (weekWasted <= 25) {
      weekTextDisplay.innerText = 'Could be better but still doing fine!';
    } else {
      weekTextDisplay.innerText = 'You can do a lot better than this.';
    }

    // display this bi week's money wasted
    biWeekDisplay.innerText = '$' + round(biWeekWasted, 2) + ' wasted in these weeks';
    if (biWeekWasted == 0) {
      biWeekTextDisplay.innerText = 'Excellent work!';
    } else if (biWeekWasted <= 50) {
      biWeekTextDisplay.innerText = 'Could be better but still doing fine!';
    } else {
      biWeekTextDisplay.innerText = 'You can do a lot better than this.';
    }

    // display this month's money wasted
    moDisplay.innerText = '$' + round(moWasted, 2) + ' wasted this month';
    if (moWasted == 0) {
      moTextDisplay.innerText = 'Excellent work!';
    } else if (moWasted <= 100) {
      moTextDisplay.innerText = 'Could be better but still doing fine!';
    } else {
      moTextDisplay.innerText = 'You can do a lot better than this.';
    }


    // this week's wastes
    weekDairyMoney.innerText = '$' + round(dairyWasted, 2) + ' wasted this week.';
    weekProduceMoney.innerText = '$' + round(produceWasted, 2) + ' wasted this week.';
    weekMeatMoney.innerText = '$' + round(meatWasted, 2)+ ' wasted this week.';
    weekMiscMoney.innerText = '$' + round(miscWasted, 2) + ' wasted this week.';

    if (weekWasted != 0) {
      weekDairyPercent.innerText = round((dairyWasted / weekWasted) * 100, 2) + '%';
      weekProducePercent.innerText = round((produceWasted / weekWasted) * 100, 2) + '%';
      weekMeatPercent.innerText = round((meatWasted / weekWasted) * 100, 2) + '%';
      weekMiscPercent.innerText = round((miscWasted / weekWasted) * 100, 2) + '%';
    }

    // this biweek's wastes
    biWeekDairyMoney.innerText = '$' + round(biDairyWasted, 2) + ' wasted in these weeks.';
    biWeekProduceMoney.innerText = '$' + round(biProduceWasted, 2) + ' wasted in these weeks.';
    biWeekMeatMoney.innerText = '$' + round(biMeatWasted, 2) + ' wasted in these weeks.';
    biWeekMiscMoney.innerText = '$' + round(biMiscWasted, 2) + ' wasted in these weeks.';

    if (biWeekWasted != 0) {
      biWeekDairyPercent.innerText = round((biDairyWasted / biWeekWasted * 100), 2) + '%';
      biWeekProducePercent.innerText = round((biProduceWasted / biWeekWasted * 100), 2) + '%';
      biWeekMeatPercent.innerText = round((biMeatWasted / biWeekWasted * 100), 2) + '%';
      biWeekMiscPercent.innerText = round((biMiscWasted / biWeekWasted * 100), 2) + '%';
    }

    // this month''s wastes
    moDairyMoney.innerText = '$' + round(moDairyWasted, 2) + ' wasted this month.';
    moProduceMoney.innerText = '$' + round(moProduceWasted, 2) + ' wasted this month.';
    moMeatMoney.innerText = '$' + round(moMeatWasted, 2) + ' wasted this month.';
    moMiscMoney.innerText = '$' + round(moMiscWasted, 2) + ' wasted this month.';

    if (moWasted != 0) {
      moDairyPercent.innerText = round((moDairyWasted / moWasted * 100), 2) + '%';
      moProducePercent.innerText = round((moProduceWasted / moWasted  * 100), 2) + '%';
      moMeatPercent.innerText = round((moMeatWasted / moWasted  * 100), 2) + '%';
      moMiscPercent.innerText = round((moMiscWasted / moWasted * 100), 2) + '%';
    }

  });
});

console.log(weekWasted);
