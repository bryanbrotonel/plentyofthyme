(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBWQ0DKA_LDHLrsNEUkFRxh8Dr9rKKnTVA",
        authDomain: "plentyofthyme-c301a.firebaseapp.com",
        databaseURL: "https://plentyofthyme-c301a.firebaseio.com",
        projectId: "plentyofthyme-c301a",
        storageBucket: "plentyofthyme-c301a.appspot.com",
        messagingSenderId: "1087388674603"
    };
    firebase.initializeApp(config);

    var count = 0;
    // Get elements
    const itemName1 = document.getElementById('item1name');
    const itemPrice1 = document.getElementById('item1price');
    const proObject = document.getElementById('object');
    const btnSubmit = document.getElementById('btnSubmit');
    const select = document.getElementById('select');
    const itemDate1 = document.getElementById('item1date');
    const itemSelect1 = document.getElementById('item1select');

    // Create references
    const dbRefObject = firebase.database().ref().child('object');

    // Sync object changes
    // dbRefObject.on('value', snap => {
    //   preObject.innerText = JSON.stringify(snap.val(), null, 3);
    //   console.log(snap.val());
    // });

  function addItem(itemName, itemPrice, itemDate, itemCat, amount) {
  firebase.database().ref().child('items').push({
    name: itemName,
    price: itemPrice,
    date: itemDate,
    category: itemCat,
    quantity: amount
  });

  }

  btnSubmit.addEventListener('click', e => {
    const iName = itemName1.value;
    const iPrice = itemPrice1.value;
    const iDate = itemDate1.value;
    const cat = itemSelect1.value;
    var iSelect = select.value;
    addItem(iName, iPrice, iDate, cat, iSelect);
    document.getElementById('item1name').value = "";;
    document.getElementById('item1price').value = "";
    document.getElementById('select').value = "";
    document.getElementById('item1date').value = "";
    document.getElementById('item1select').value = "";
  });

}());
