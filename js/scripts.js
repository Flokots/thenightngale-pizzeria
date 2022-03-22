$(document).ready(function () {
//Business Logic

  $("table").on('input', '.txtCal', function () {
    // code logic here
    var getValue = $(this).val();
    console.log(getValue);
  });
  $("#order-form").submit(function (event) {

    //Get values from the forms
    var pizzaSize = $("#size option:selected").val();
    var pizzaCrust = $("#crust option:selected").val();

    //Push Toppings to array
    var toppingsArray = new Array();
    $("#order-form input[type=checkbox]:checked").each(function () {
      toppingsArray.push(this.value);
      return toppingsArray;
    });

    //Calculate Toppings Cost
    if (toppingsArray.length > 0) {
      var unitCost = 100;
      var topingsCost = parseInt(toppingsArray.length) * unitCost;
      console.log("Toppings Cost: " + topingsCost);
    }
    //Calculate Total Cost
    var total = parseInt(pizzaSize) + topingsCost + parseInt(pizzaCrust);
    console.log("Total: " + total);


    //User Interface Logic
    $("#table-size").html($("#table-size option:selected").text() + pizzaSize);
    $("#table-toppings").html($("#toppings option:selected").text() + topingsCost);
    $("#table-crust").html($("#table-crust option:selected").text() + pizzaCrust);
    $("#total").html(total);
    console.log("Size value: " + pizzaSize, "Crust value: " + pizzaCrust, toppingsArray);

    //Prevent Default Refreshing
    event.preventDefault();
    this.reset();
  })
})



function submitForm() {
  //Pizza Constructor
  function Pizza(size, toppings, crust, total, orderNo) {
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
    this.total = total;
    this.orderNo = orderNo;
  }

  var pizzaSize = $("#size option:selected").val();
  var pizzaCrust = $("#crust option:selected").val();
  var toppingsArray = new Array();
  $("#order-form input[type=checkbox]:checked").each(function () {
    toppingsArray.push(this.value);
    return toppingsArray;
  });

  //Calculate Toppings Cost
  if (toppingsArray.length > 0) {
    var unitCost = 100;
    var topingsCost = parseInt(toppingsArray.length) * unitCost;

  }
  console.log("Toppings Cost: " + topingsCost);
  //Calculate Total Cost
  var total = parseInt(pizzaSize) + topingsCost + parseInt(pizzaCrust);
  console.log("Total: " + total);
  var order = 1;
  order = order + 1;

  var newPizza = new Pizza(pizzaSize, topingsCost, pizzaCrust, total, order);
  console.log(newPizza);
  var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="table-size">' + $("#table-size option:selected").text() + newPizza.size + '</td><td id="table-toppings">' + $("#table-toppings option:selected").text() + newPizza.toppings + '</td><td id="table-crust">' + $("#table-crust option:selected").text() + newPizza.crust + '</td><td class="newtotal">' + newPizza.total + '</td></tr>'


  $("#pizza").append(newRow);

  document.getElementById("order-form").reset();
}

//Business Logic

var deliveryCharge = 0;
function checkout() {

  let delivery = confirm("Would you like us to deliver your order?");
  if (delivery) {
    let location = prompt("Please Enter Your Location");
    alert(`Your order will be delivered to ${location}. Delivery cost is Ksh. 200`)
    return deliveryCharge = 200;
  } else {
    return deliveryCharge = 0;
  }
}
var subTotalOne = 0;
function subTotal1() {
  $('.total').each(function () {
    subTotalOne = subTotalOne + parseFloat($("#total").text());
    return subTotalOne;
  });
}

var subTotalTwo = 0;
function subTotal2() {
  $('.newtotal').each(function () {
    subTotalTwo = subTotalTwo + parseFloat($(".newtotal").text());
    return subTotal2;
  })
}
function calculateGrandTotal() {
  subTotal1();
  subTotal2();
  checkout();
  var grandTotal = parseFloat(subTotalOne) + parseFloat(subTotalTwo) + parseFloat(deliveryCharge);
  $('#grandtotal').text(grandTotal);
  console.log("grandTotal: " + grandTotal);
}
