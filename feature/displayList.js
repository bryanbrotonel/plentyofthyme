// create variables
var name;
var string = "";
var string2 = "";
var buttons = [];
var values = [];
var dates = [];
var names = [];
var i = 0;
var j = 1;
const uiList = document.getElementById('list');
var btnSubmit = document.getElementById('btnSubmit');
var ul = document.createElement('ul');
var li = document.createElement('li');

// add event listener
btnSubmit.addEventListener('click', e => {
  window.location.href = 'cart.html';
});

// modal box set up
$(document).ready(function() {
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

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
            string = value.name + "\t" + value.date + '\n';
            string2 = document.createTextNode(string);
            li.appendChild(string2);
            // li.setAttribute('data-target', 'modal1');
            li.setAttribute('class', 'btn waves-light waves-effect');
            li.setAttribute('id', value.name + value.date);
            li.setAttribute('style', 'background-color: black; opacity: 0.6;');
            li.appendChild(document.createElement('br'));
            ul.appendChild(li);
          });
        });

        uiList.appendChild(ul);

        // store buttons
        for (i = 0; i < values.length; i++) {
          buttons[i] = document.getElementById(values[i]);
        }

        // add event listener
        buttons[0].addEventListener('click', e => {
          $('#modalMain').modal('open');
          document.getElementById('mod').addEventListener('click', e => {
            $('#modalEdit').modal('open');
            document.getElementById('save').addEventListener('click', e => {
              Materialize.toast('Saved!', 4000);
            });
          });
          document.getElementById('remove').addEventListener('click', e => {
            $('#modalDelete').modal('open');
            document.getElementById('confirmDelete').addEventListener('click', e => {
              buttons[0].remove();
              itemRef.child(dates[0]).child(names[0]).remove();
            });
          });
        });

        // add event listeners
        for (i = 1; i < buttons.length; i++) {
          buttons[i].addEventListener('click', e => {
            $('#modalMain').modal('open');
            document.getElementById('mod').addEventListener('click', e => {
              $('#modalEdit').modal('open');
              document.getElementById('save').addEventListener('click', e => {});
            });
            document.getElementById('remove').addEventListener('click', e => {
              $('#modalDelete').modal('open');
              document.getElementById('confirmDelete').addEventListener('click', e => {
                buttons[j].remove();
                itemRef.child(dates[j]).child(names[j]).remove();
              });
            });
          });
        }

      } else {
        // Fill container when list is empty
        uiList.setAttribute('class', 'center container');
        uiList.innerText = '\nYou have nothing in your fridge yet!'+'\n\n';
      }
    });
});
