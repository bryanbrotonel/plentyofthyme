(function() {

    var count = 0;
    // Get elements
    const itemName1 = document.getElementById('item1name');
    const itemPrice1 = document.getElementById('item1price');
    const proObject = document.getElementById('object');
    const btnSubmit = document.getElementById('btnSubmit');

    const select = document.getElementById('qty');
    const itemDate1 = document.getElementById('item1date');
    const itemSelect1 = document.getElementById('item1select');

    // Create ref
    // var user = firebase.auth().currentUser;
    // if (user != null) {
    //   name = user.displayName;
    // }
    var user1;
    var name;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        user1 = firebase.auth().currentUser;
        name = user1.uid;
        console.log(name);
      } else {
        window.location.href='login.html';
      }
    });

    function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

  function addItem(itemName, itemPrice, itemDate, itemCat, amount) {
    if(itemName != "" && itemPrice != "" && itemDate != "" && itemCat != "" && amount != "") {
      if (!isNumber(itemPrice)) {
        Materialize.toast('Please enter a valid price', 4000);
        console.log('invalid price');
        return;
      }
    //  firebase.database().ref().child('users/' + user1.uid).child('items').push({
      firebase.database().ref().child('users/' + user1.uid).child(itemDate).child(itemName).set({
        //name: itemName,
        price: itemPrice,
        //date: itemDate,
        category: itemCat,
        quantity: amount
        // })
        // name: itemName,
        // price: itemPrice,
        // date: itemDate,
        // category: itemCat,
        // quantity: amount
      });
      Materialize.toast('Successfully added ' + itemName + '.', 4000);
      document.getElementById('item1name').value = "";;
      document.getElementById('item1price').value = "";
      document.getElementById('select').value = "";
      document.getElementById('item1date').value = "";
      document.getElementById('item1select').value = "";
    } else {
      Materialize.toast('Please fill in all fields.', 4000);
      console.log('missing fields');
    }
  }

  btnSubmit.addEventListener('click', e => {
    const iName = itemName1.value;
    const iPrice = itemPrice1.value;
    const iDate = itemDate1.value;
    const cat = itemSelect1.value;
    var iSelect = select.value;
    addItem(iName, iPrice, iDate, cat, iSelect);
  });

}());
