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

    // Get elements
    const itemName1 = document.getElementById('itemName1');
    const itemPrice1 = document.getElementById('itemPrice1');
    const proObject = document.getElementById('object');
    const btnSubmit = document.getElementById('submit');

    // Create references
    const dbRefObject = firebase.database().ref().child('object');

    // Sync object changes
    dbRefObject.on('value', snap => {
      preObject.innerText = JSON.stringify(snap.val(), null, 3);
      console.log(snap.val()));

  function addItem(itemName, itemPrice) {
  firebase.database().ref('items/' + userId).set({
    name: itemName,
    price: itemPrice
  });
  }

  btnSubmit.addEventListener('click', e => {
    const iName = itemName1.value;
    const iPrice = itemPrice1.value;
    addItem(iName, iPrice);
  });

}());
