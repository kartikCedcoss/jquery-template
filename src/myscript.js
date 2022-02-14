var productArr = [];
$(document).ready(function () {
  $("#update_product").hide();
  $("update_product").click(function () {
    $("#add_product").show();
  });

  $("#add_product").on("click", function () {
    var sku = document.getElementById("product_sku").value;
    var name = document.getElementById("product_name").value;
    var price = document.getElementById("product_price").value;
    var quantity = document.getElementById("product_quantity").value;

    var objproduct = {
      sku: sku,
      name: name,
      price: price,
      quantity: quantity,
    };
    productArr.push(objproduct);

    addrow(productArr);
  });
});

function addrow(productArr) {
  var html =
    "<table> <tr> <th> SKU</th> </t> <th>   Name</th> </t> <th> Price </th< </t> <th> Quantity </th> ";
  for (let i = 0; i < productArr.length; i++) {
    html +=
      "<tr><td>" +
      productArr[i].sku +
      "</td><td>" +
      productArr[i].name +
      "</td><td>" +
      "$" +
      productArr[i].price +
      "</td><td>" +
      productArr[i].quantity +
      '</td><td><a href="#" onClick="onEdit(this)" class ="edit" > Edit</a><a href="#" onclick="remove(' +
      parseInt(productArr[i].sku) +
      ')"  class = "delete"> Delete</a></td></tr>';
  }
  html += "</table>";
  document.getElementById("product_list").innerHTML = html;
}

function onEdit(td) {
  $("#update_product").show();
  //$("edit").click( function(){
  $("#add_product").hide();
  // });

  var selectedRow = td.parentElement.parentElement;
  document.getElementById("product_sku").value = selectedRow.cells[0].innerHTML;
  document.getElementById("product_name").value =
    selectedRow.cells[1].innerHTML;
  document.getElementById("product_price").value =
    selectedRow.cells[2].innerHTML;
  document.getElementById("product_quantity").value =
    selectedRow.cells[3].innerHTML;
}

function remove(y) {


  for (var i = 0; i < productArr.length; i++) {
    console.log(productArr[i]);
    if (productArr[i].sku == y) {

      alert("you want to delete productArr[i]");

      productArr.splice(i, 1);
    }
  }
  //addrow(productArr);
}

$("#update_product").click(function () {
  $("#update_product").hide();
  $("#add_product").show();
  var v_sku = document.getElementById("product_sku").value;
  var v_name = document.getElementById("product_name").value;
  var v_price = document.getElementById("product_price").value;
  var v_quantity = document.getElementById("product_quantity").value;

  for (let i = 0; i < productArr.length; i++) {
    if (productArr[i].sku == v_sku) {
      productArr[i].sku = v_sku;
      productArr[i].name = v_name;
      productArr[i].price = v_price;
      productArr[i].quantity = v_quantity;
    }
  }
  addrow(productArr);
});
