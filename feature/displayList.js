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
        // var list  = snapshot.val();
        // console.log(list);
        // uiList.setAttribute('class', 'container');
        // console.log(snapshot.val());
      } else {
        uiList.setAttribute('class', 'center container');
        uiList.innerText = '\nYou have nothing in your fridge yet!' + '\n\n';
        console.log(snapshot.val());
      }
    });
    console.log(name);
  }
});
