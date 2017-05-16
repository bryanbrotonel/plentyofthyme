(function() {

    var iName2;
    var iName3;
    var iPrice2;
    var iPrice3;
    var iDate2;
    var iDate3;
    var cat2;
    var cat3
    var iSelect2;
    var iSelect3;

    var itemName2;
    var itemName3;
    var itemPrice2;
    var itemPrice3;
    var itemDate2;
    var itemDate3;
    var itemSelect2;
    var itemSelect3
    var select2;
    var select3;

    // Get elements
    const itemName1 = document.getElementById('item1name');
    const itemPrice1 = document.getElementById('item1price');
    const proObject = document.getElementById('object');
    const btnSubmit = document.getElementById('btnSubmit');
    const main = document.getElementById('main');

    const select = document.getElementById('qty');
    const itemDate1 = document.getElementById('item1date');
    const itemSelect1 = document.getElementById('item1select');
    const btnAdd = document.getElementById('btnAdd');

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

  function addItem(itemName, itemPrice, itemDate, itemCat, amount, name, price, date, cat, qty) {
    if(itemName != "" && itemPrice != "" && itemDate != "" && itemCat != "" && amount != "") {
      if (!isNumber(itemPrice)) {
        Materialize.toast('Please enter a valid price', 4000);
        console.log('invalid price');
        return;
      }
    //  firebase.database().ref().child('users/' + user1.uid).child('items').push({
      firebase.database().ref().child('users/' + user1.uid).child(itemDate).child(itemName).set({
        name: itemName,
        price: itemPrice,
        date: itemDate,
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
      name.value = "";
      price.value = "";
      qty.value = "";
      date.value = "";
      cat.value = "";
      // document.getElementById('item1name').value = "";;
      // document.getElementById('item1price').value = "";
      // document.getElementById('qty').value = "";
      // document.getElementById('item1date').value = "";
      // document.getElementById('item1select').value = "";
    } else {
      Materialize.toast('Please fill in all fields.', 4000);
      console.log('missing fields');
    }
  }

  function addItem(itemName, itemPrice, itemDate, itemCat, amount, name, price, date, cat, qty, itemNum) {
    if(itemName != "" && itemPrice != "" && itemDate != "" && itemCat != "" && amount != "") {
      if (!isNumber(itemPrice)) {
        Materialize.toast('Please enter a valid price', 4000);
        console.log('invalid price');
        return;
      }
    //  firebase.database().ref().child('users/' + user1.uid).child('items').push({
      firebase.database().ref().child('users/' + user1.uid).child(itemDate).child(itemName).set({
        name: itemName,
        price: itemPrice,
        date: itemDate,
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
      name.value = "";
      price.value = "";
      qty.value = "";
      date.value = "";
      cat.value = "";
      // document.getElementById('item1name').value = "";;
      // document.getElementById('item1price').value = "";
      // document.getElementById('qty').value = "";
      // document.getElementById('item1date').value = "";
      // document.getElementById('item1select').value = "";
    } else {
      Materialize.toast('Please fill in all fields for item ' + itemNum + '.', 4000);
      console.log('missing fields');
    }
  }

  var count = 2;

  btnAdd.addEventListener('click', e => {
    console.log('true');
    var name = document.createElement("input");
    var qty = document.createElement("input");
    var date = document.createElement("input");
    var price = document.createElement("input");
    var category = document.createElement("select");

    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    var div4 = document.createElement('div');
    var div5 = document.createElement('div');
    var div6 = document.createElement('div');

    var label1 = document.createElement('label');
    var label2 = document.createElement('label');
    var label3 = document.createElement('label');
    var label4 = document.createElement('label');
    var label5 = document.createElement('label');

    label1.appendChild(document.createTextNode('Item Name'));
    label2.appendChild(document.createTextNode('Quantity'));
    label3.appendChild(document.createTextNode('Expiration Date'));
    label4.appendChild(document.createTextNode('Price'));
    label5.appendChild(document.createTextNode('Category'));

    label1.setAttribute('class', 'col-sm-12 control-label');
    label2.setAttribute('class', 'col-sm-12 control-label');
    label3.setAttribute('class', 'col-sm-12 control-label');
    label4.setAttribute('class', 'col-sm-12 control-label');
    label5.setAttribute('class', 'col-sm-12 control-label');

    div1.setAttribute('class', 'col-sm-12');
    div2.setAttribute('class', 'col-sm-12');
    div3.setAttribute('class', 'col-sm-12');
    div4.setAttribute('class', 'col-sm-12');
    div5.setAttribute('class', 'col-sm-12');
    div6.setAttribute('class', 'col-sm-12');

    div1.appendChild(name);
    div2.appendChild(qty);
    div3.appendChild(date);
    div4.appendChild(price);
    div5.appendChild(category);
    div5.appendChild(document.createElement('br'));

    name.setAttribute('type', 'text');
    name.setAttribute('placeholder', 'Item ' + count);
    name.setAttribute('id', 'item' + count + 'Name');


    qty.setAttribute('type', 'number');
    qty.setAttribute('placeholder', 'Quantity');
    qty.setAttribute('id', 'item' + count + 'qty');


    date.setAttribute('type', 'date');
    date.setAttribute('placeholder', 'date');
    date.setAttribute('id', 'item' + count + 'date');


    price.setAttribute('type', 'text');
    price.setAttribute('placeholder', 'Price');
    price.setAttribute('id', 'item' + count + 'price');


    category.setAttribute('id', 'item' + count + 'select');


    var option1 = document.createElement('option');
    var option2 = document.createElement('option');
    var option3 = document.createElement('option');
    var option4 = document.createElement('option');

    option1.appendChild(document.createTextNode('dairy'));
    option2.appendChild(document.createTextNode('produce'));
    option3.appendChild(document.createTextNode('meats & alternatives'));
    option4.appendChild(document.createTextNode('miscellaneous'));

    category.appendChild(option1);
    category.appendChild(option2);
    category.appendChild(option3);
    category.appendChild(option4);
    category.appendChild(document.createElement('br'));

    if (count < 4) {
      main.appendChild(label1);
      main.appendChild(div1);
      main.appendChild(label2);
      main.appendChild(div2);
      main.appendChild(label3);
      main.appendChild(div3);
      main.appendChild(label4);
      main.appendChild(div4);
      main.appendChild(label5);
      main.appendChild(div5);

      count++;
    } else {
      Materialize.toast('Too many elements.', 4000);
    }
    $(document).ready(function() {
      $('select').material_select();
    });
  });

  btnSubmit.addEventListener('click', e => {
    iName = itemName1.value;
    iPrice = itemPrice1.value;
    iDate = itemDate1.value;
    cat = itemSelect1.value;
    iSelect = select.value;

    itemName2 = document.getElementById('item2Name');
    itemName3 = document.getElementById('item3Name');
    itemPrice2 = document.getElementById('item2price');
    itemPrice3 = document.getElementById('item3price');
    itemDate2 = document.getElementById('item2date');
    itemDate3 = document.getElementById('item3date');
    itemSelect2 = document.getElementById('item2qty'); //cat
    itemSelect3 = document.getElementById('item3qty');
    select2 = document.getElementById('item2select');
    select3 = document.getElementById('item3select');

    addItem(iName, iPrice, iDate, cat, iSelect, itemName1, itemPrice1, itemDate1, itemSelect1, select, 1);
    if (itemName2 != null && itemPrice2 != null && itemDate2 != null && itemSelect2 != null && select2 != null) {
      addItem(itemName2.value, itemPrice2.value, itemDate2.value, itemSelect2.value, select2.value, itemName2, itemPrice2, itemDate2, itemSelect2, select2, 2);
    } else {
      Materialize.toast('Please fill in all fields for item 2.', 4000);
      console.log(itemName2.value);
      console.log(itemPrice2.value);
      console.log(itemDate2.value);
      console.log(itemSelect2.value);
      console.log(select2.value);

    }
    if (itemName3 != null && itemPrice3 != null && itemDate3 != null && itemSelect3 != null && select3 != null) {
    addItem(itemName3.value, itemPrice3.value, itemDate3.value, itemSelect3.value, select3.value, itemName3, itemPrice3, itemDate3, itemSelect3, select3, 3);
    } else {
      Materialize.toast('Please fill in all fields for item 3.', 4000);
    }
  });

}());
