var productArr = [];
$(document).ready(function () {
  $(".success").hide();
  $(".error").hide();
  $("#update_product").hide();
  $("update_product").click(function () {
    $("#add_product").show();
  });
  $(".success").click(function () {
    $(".success").hide();
  });
  $(".error").click(function () {
    $(".error").hide();
  });
  $("#add_product").on("click", function () {
    var sku = document.getElementById("product_sku").value;
    var name = document.getElementById("product_name").value;
    var price = document.getElementById("product_price").value;
    var quantity = document.getElementById("product_quantity").value;
    if (isNaN(sku)) {
      $(".error").show().fadeOut(3000);
      $(".success").hide();
      $("#sku_error").text(" enter a number ").fadeOut(3000);
      $("#sku_error").css("color","red");
      $("#product_sku").css("border-color", "red",);
      $("#product_sku").css("border-width", "1px");
      $("#product_name").css("border-color", "black");
      $("#product_name").css("border-width", "1px");
      $("#product_price").css("border-color", "black");
      $("#product_price").css("border-width", "1px");
      $("#product_quantity").css("border-color", "black");
      $("#product_quantity").css("border-width", "1px");
      $("name_error").hide();
      $("price_error").hide();
      $("quantity_error").hide();
      

    } else if (sku == "") {
      $(".error").show().fadeOut(3000);
      $(".success").hide();
      $("#sku_error").text(" sku field cannot be empty").fadeOut(3000);
      $("#sku_error").css("color","red");
      $("#product_sku").css("border-color", "red");
      $("#product_sku").css("border-width", "1px");
      $("#product_name").css("border-color", "black");
      $("#product_name").css("border-width", "1px");
      $("#product_price").css("border-color", "black");
      $("#product_price").css("border-width", "1px");
      $("#product_quantity").css("border-color", "black");
      $("#product_quantity").css("border-width", "1px");
      $("name_error").hide();
      $("price_error").hide();
      $("quantity_error").hide();
    } else if (!isNaN(name)) {
      $(".error").show().fadeOut(3000);
      $(".success").hide();
      $("#name_error").text(" enter a string").fadeOut(3000);
      $("#name_error").css("color","red");
      $("#product_name").css("border-color", "red");
      $("#product_sku").css("border-color", "black");
      $("#product_sku").css("border-width", "1px");
      $("#product_price").css("border-color", "black");
      $("#product_price").css("border-width", "1px");
      $("#product_quantity").css("border-color", "black");
      $("#product_quantity").css("border-width", "1px");
      $("sku_error").hide();
      $("price_error").hide();
      $("quantity_error").hide();
    } else if (name == "") {
      $(".error").show().fadeOut(3000);
      $(".success").hide();
      $("#name_error").text(" name field cannot be empty").fadeOut(3000);
      $("#name_error").css("color","red");
      $("#product_name").css("border-color", "red");
      $("#product_sku").css("border-color", "black");
      $("#product_sku").css("border-width", "1px");
      $("#product_price").css("border-color", "black");
      $("#product_price").css("border-width", "1px");
      $("#product_quantity").css("border-color", "black");
      $("#product_quantity").css("border-width", "1px");
      $("sku_error").hide();
      $("price_error").hide();
      $("quantity_error").hide();
    } else if (price == "") {
      $(".error").show().fadeOut(3000);
      $(".success").hide();
      $("#price_error").text(" price field cannot be empty").fadeOut(3000);
      $("#price_error").css("color","red");
      $("#product_price").css("border-color", "red");
      $("#product_sku").css("border-color", "black");
      $("#product_sku").css("border-width", "1px");
      $("#product_name").css("border-color", "black");
      $("#product_name").css("border-width", "1px");
      $("#product_quantity").css("border-color", "black");
      $("#product_quantity").css("border-width", "1px");
      $("sku_error").hide();
      $("name_error").hide();
      $("quantity_error").hide();
    } else if (quantity == "") {
      $(".error").show().fadeOut(3000);
      $(".success").hide();
      $("#quantity_error").text(" quantity field cannot be empty").fadeOut(3000);
      $("#quantity_error").css("color","red");
      $("#product_quantity").css("border-color", "red");
      $("#product_sku").css("border-color", "black");
      $("#product_sku").css("border-width", "1px");

      $("#product_name").css("border-color", "black");
      $("#product_name").css("border-width", "1px");
      $("#product_price").css("border-color", "black");
      $("#product_price").css("border-width", "1px");
      $("sku_error").hide();
      $("price_error").hide();
      $("name_error").hide();
    } else {
      var objproduct = {
        sku: sku,
        name: name,
        price: price,
        quantity: quantity,
      };
      var flag = 0;
      for( let i = 0; i<productArr.length;i++){
        if(sku== productArr[i].sku){
        flag=1;

        }
      }
      if (flag == 1){
        alert('please enter a valid id ');
      } 
      else {
        productArr.push(objproduct);
        addrow(productArr);
        
      }
     
      

      $(".success").show().fadeOut(3000);
      $(".error").hide();
      $("#product_sku").css("border-color", "black");
      $("#product_sku").css("border-width", "1px");

      $("#product_name").css("border-color", "black");
      $("#product_name").css("border-width", "1px");
      $("#product_price").css("border-color", "black");
      $("#product_price").css("border-width", "1px");
      $("#product_quantity").css("border-color", "black");
      $("#product_quantity").css("border-width", "1px");
      $("sku_error").hide();
      $("price_error").hide();
      $("quantity_error").hide();
      $("name_error").hide();

    }
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

  $("#add_product").hide();

  var selectedRow = td.parentElement.parentElement;
  document.getElementById("product_sku").value = selectedRow.cells[0].innerHTML;
  document.getElementById("product_name").value =
    selectedRow.cells[1].innerHTML;
  document.getElementById("product_price").value =
    selectedRow.cells[2].substring(1).innerHTML;
  document.getElementById("product_quantity").value =
    selectedRow.cells[3].innerHTML;
}

function remove(y) {
  if (confirm("Are you sure you want to delete this item")) {
    for (var i = 0; i < productArr.length; i++) {
      if (productArr[i].sku == y) {
        productArr.splice(i, 1);
      }
    }
  }
  addrow(productArr);
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
function errorMessage1() {
  
  var v_sku = document.getElementById("product_sku").value;
  var v_name = document.getElementById("product_name").value;
  var v_price = document.getElementById("product_price").value;
  var v_quantity = document.getElementById("product_quantity").value;
        document.getElementById("product")
        if (isNaN(v_sku)) 
        {
              console.log('hello');
            // Changing content and color of content
            error.textContent = "Please enter a valid number"
            error.style.color = "red"
        
          }

    }