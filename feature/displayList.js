var user1;
var name;
var btnSubmit = document.getElementById('btnSubmit');
console.log(btnSubmit);

btnSubmit.addEventListener('click', e => {
  window.location.href = 'cart.html';
});

var string = "";

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    user1 = firebase.auth().currentUser;

    // Get elements
    var buttons = [];
    var values = [];
    var i = 0;

    const uiList = document.getElementById('list');
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var string2;
    user1 = firebase.auth().currentUser;
    var itemRef = firebase.database().ref('users/' + user1.uid);

    itemRef.on('value', function(snapshot) {
      if (snapshot.val() != null) {
        snapshot.forEach(function(childSnapshot) {
          childSnapshot.forEach(function(childChildSnapshot) {
            var li = document.createElement('li');
            value = childChildSnapshot.val();
            values[i] = value.name + value.date;
            i++;
            string = value.name + "\t" + value.date + '\n';
            string2 = document.createTextNode(string);
            li.appendChild(string2);
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
        });
        var j = 1;
        for (i = 1; i < buttons.length; i++) {
          buttons[i].addEventListener('click', e => {
            buttons[j].remove();
            j++;
          });
        }
      } else {
        uiList.setAttribute('class', 'center container');
        uiList.innerText = '\nYou have nothing in your fridge yet!' + '\n\n';
        console.log(snapshot.val());
      }
    });
<<<<<<< HEAD
    console.log(name);
=======

  } else {
    window.location.href='login.html';
>>>>>>> claidev2
  }

});
