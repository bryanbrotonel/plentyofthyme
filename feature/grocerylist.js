(function() {

    var count = 0;
    // Get elements
    const itemName1 = document.getElementById('item1name');
    const itemPrice1 = document.getElementById('item1price');
    const proObject = document.getElementById('object');
    const btnSubmit = document.getElementById('btnSubmit');

    const select = document.getElementById('select');
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
    if (!isNumber(itemPrice)) {
      window.alert('Please enter a valid price');
      console.log('invalid price');
      return;
    }
    if(itemName != "" && itemPrice != "" && isNumber(itemPrice) && itemDate != "" && itemCat != "" && amount != "") {
      firebase.database().ref().child('users/' + user1.uid).child('items').push({
        name: itemName,
        price: itemPrice,
        date: itemDate,
        category: itemCat,
        quantity: amount
      });
      document.getElementById('item1name').value = "";;
      document.getElementById('item1price').value = "";
      document.getElementById('select').value = "";
      document.getElementById('item1date').value = "";
      document.getElementById('item1select').value = "";
    } else {
      window.alert('Please fill in all fields.');
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
