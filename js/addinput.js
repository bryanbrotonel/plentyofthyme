var counter = 1;

function addinput(divName) {
  var br = document.createElement('div');
  var label = document.createElement('div');
  var name = document.createElement('div');
  var quantity = document.createElement('div');
  var date = document.createElement('div');
  var price = document.createElement('div');
  var category = document.createElement('div');

  br.innerHTML = "<br><br>";
  label.innerHTML = "<label for='Item" + (counter + 1) + "' class='col-sm-1 control-label'>Item " + (counter + 1) + "</label>";
  name.innerHTML = "<div class = 'col-sm-4'> <input type='text' class='form-control' placeholder='Item " + (counter + 1) + "'> </div>";
  quantity.innerHTML = "<div class='col-sm-1'> <select class='form-control' id ='select'> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> </select> </div>";
  date.innerHTML = "<div class='col-sm-2'> <input type='date' class='form-control' id='item" + (counter + 1) + "'> </div>";
  price.innerHTML = "<div class='col-sm-2'> <input type='number' class='form-control' id='item" + (counter + 1) + "' placeholder='price'> </div>";
  category.innerHTML = "<div class='col-sm-2'> <select class='form-control' id='select'> <option>dairy</option> <option>vegetables</option> <option>fruits</option> <option>produce</option> <option>meats & alternatives</option> <option>miscellaneous</option> </select> </div>"

  document.getElementById(divName).appendChild(br);
  document.getElementById(divName).appendChild(label);
  document.getElementById(divName).appendChild(name);
  document.getElementById(divName).appendChild(quantity);
  document.getElementById(divName).appendChild(date);
  document.getElementById(divName).appendChild(price);
  document.getElementById(divName).appendChild(category);

  counter++;
}
