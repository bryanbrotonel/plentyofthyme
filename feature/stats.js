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
      if ((today.getDate() - date) < 7 && (today.getDate() - date) >= 0) {
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

      if ((today.getDate() - date) < 14 && (today.getDate() - date) >= 0) {
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

      if ((today.getDate() - date) <= 31 && (today.getDate() - date) >= 0) {
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
    weekDisplay.innerText = '$' + round(weekWasted, 4) + ' wasted this week.';
    if (weekWasted == 0) {
      weekTextDisplay.innerText = 'Excellent work!';
    } else if (weekWasted <= 25) {
      weekTextDisplay.innerText = 'Could be better but still doing fine!';
    } else {
      weekTextDisplay.innerText = 'You can do a lot better than this.';
    }

    // display this bi week's money wasted
    biWeekDisplay.innerText = '$' + round(biWeekWasted, 4) + ' wasted these weeks.';
    if (biWeekWasted == 0) {
      biWeekTextDisplay.innerText = 'Excellent work!';
    } else if (biWeekWasted <= 50) {
      biWeekTextDisplay.innerText = 'Could be better but still doing fine!';
    } else {
      biWeekTextDisplay.innerText = 'You can do a lot better than this.';
    }

    // display this month's money wasted
    moDisplay.innerText = '$' + round(moWasted, 4) + ' wasted this month.';
    if (moWasted == 0) {
      moTextDisplay.innerText = 'Excellent work!';
    } else if (moWasted <= 100) {
      moTextDisplay.innerText = 'Could be better but still doing fine!';
    } else {
      moTextDisplay.innerText = 'You can do a lot better than this.';
    }


    // this week's wastes
    weekDairyMoney.innerText = '$' + dairyWasted + ' wasted this week.';
    weekProduceMoney.innerText = '$' + produceWasted + ' wasted this week.';
    weekMeatMoney.innerText = '$' + meatWasted + ' wasted this week.';
    weekMiscMoney.innerText = '$' + miscWasted + ' wasted this week.';

    if (weekWasted != 0) {
      weekDairyPercent.innerText = round((dairyWasted / weekWasted), 4) * 100 + '%';
      weekProducePercent.innerText = round((produceWasted / weekWasted), 4) * 100 + '%';
      weekMeatPercent.innerText = round((meatWasted / weekWasted), 4) * 100 + '%';
      weekMiscPercent.innerText = round((miscWasted / weekWasted), 4) * 100 + '%';
    }

    // this biweek's wastes
    biWeekDairyMoney.innerText = '$' + biDairyWasted + ' wasted these weeks.';
    biWeekProduceMoney.innerText = '$' + biProduceWasted + ' wasted these weeks.';
    biWeekMeatMoney.innerText = '$' + biMeatWasted + ' wasted these weeks.';
    biWeekMiscMoney.innerText = '$' + biMiscWasted + ' wasted these weeks.';

    if (biWeekWasted != 0) {
      biWeekDairyPercent.innerText = round((biDairyWasted / biWeekWasted), 4) * 100 + '%';
      biWeekProducePercent.innerText = round((biProduceWasted / biWeekWasted), 4) * 100 + '%';
      biWeekMeatPercent.innerText = round((biMeatWasted / biWeekWasted), 4) * 100 + '%';
      biWeekMiscPercent.innerText = round((biMiscWasted / biWeekWasted), 4) * 100 + '%';
    }

    // this month''s wastes
    moDairyMoney.innerText = '$' + moDairyWasted + ' wasted this month.';
    moProduceMoney.innerText = '$' + moProduceWasted + ' wasted this month.';
    moMeatMoney.innerText = '$' + moMeatWasted + ' wasted this month.';
    moMiscMoney.innerText = '$' + moMiscWasted + ' wasted this month.';

    if (moWasted != 0) {
      moDairyPercent.innerText = round((moDairyWasted / moWasted), 4) * 100 + '%';
      moProducePercent.innerText = round((moProduceWasted / moWasted), 4) * 100 + '%';
      moMeatPercent.innerText = round((moMeatWasted / moWasted), 4) * 100 + '%';
      moMiscPercent.innerText = round((moMiscWasted / moWasted), 4) * 100 + '%';
    }

  });
});

console.log(weekWasted);
