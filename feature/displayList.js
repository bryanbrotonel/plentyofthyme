var user1;
var name;
var btnSubmit = document.getElementById('btnSubmit');
console.log(btnSubmit);

btnSubmit.addEventListener('click', e => {
  window.location.href = 'cart.html';
});

var string = "";

$(document).ready(function() {
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    user1 = firebase.auth().currentUser;

    // Get elements
    var buttons = [];
    var values = [];
    var dates = [];
    var names = [];
    var i = 0;

    const uiList = document.getElementById('list');
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var string2;
    user1 = firebase.auth().currentUser;
    var itemRef = firebase.database().ref('users/' + user1.uid);

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
            string = value.name + "\t" + value.date + '\n';
            string2 = document.createTextNode(string);
            li.appendChild(string2);
            li.setAttribute('data-target', 'modal1');
            li.setAttribute('class', 'btn waves-light waves-effect');
            li.setAttribute('id', value.name + value.date);
            li.setAttribute('style', 'background-color: black; opacity: 0.6;');
            li.appendChild(document.createElement('br'));
            ul.appendChild(li);
          });
        });

        uiList.appendChild(ul);
        for (i = 0; i < values.length; i++) {
          buttons[i] = document.getElementById(values[i]);
        }
        buttons[0].addEventListener('click', e => {
          buttons[0].remove();
          itemRef.child(dates[0]).child(names[0]).remove();
        });
        var j = 1;
        for (i = 1; i < buttons.length; i++) {
          buttons[i].addEventListener('click', e => {
            $('#modal1').modal('open');
            remove(j);
          });
        }
      } else {
        uiList.setAttribute('class', 'center container');
        uiList.innerText = '\nYou have nothing in your fridge yet!' + '\n\n';
        console.log(snapshot.val());
      }
    });
    console.log(name);

    function remove(i) {
      buttons[i].remove();
      console.log(dates[i]);
      itemRef.child(dates[i]).child(names[i]).remove();
      i++;
    }
  }

});
