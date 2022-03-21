$(document).ready(function () {
  // $("#table-order").hide();
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

    //Add Text to Table Row
    $("#table-size").html($("#table-size option:selected").text() + pizzaSize);
    $("#table-toppings").html($("#toppings option:selected").text() + topingsCost);
    $("#table-crust").html($("#table-crust option:selected").text() + pizzaCrust);
    $("#total").html(total);
    console.log("Size value: " + pizzaSize, "Crust value: " + pizzaCrust, toppingsArray);

    //Prevent Default Refreshing
    event.preventDefault();
    this.reset();
  })

  // $('#button-add-pizza').click(function () {
  //   $("#order-form").submit(function (event) {
  //     //Pizza Constructor
  //     function Pizza(size, toppings, crust, total, orderNo) {
  //       this.size = size;
  //       this.toppings = toppings;
  //       this.crust = crust;
  //       this.total = total;
  //       this.orderNo = orderNo;
  //     }
  //     var pizzaSize = $("#size option:selected").val();
  //     var pizzaCrust = $("#crust option:selected").val();

  //     var toppingsArray = new Array();
  //     $("#order-form input[type=checkbox]:checked").each(function () {
  //       toppingsArray.push(this.value);
  //       return toppingsArray;
  //     });

  //     if (toppingsArray.length > 0) {
  //       var unitCost = 100;
  //       var topingsCost = parseInt(toppingsArray.length) * unitCost;
  //       console.log("Toppings Cost: " + topingsCost);
  //     }
  //     console.log("Size value: " + pizzaSize, "Crust value: " + pizzaCrust, toppingsArray);
  //     var total = parseInt(pizzaSize) + topingsCost + parseInt(pizzaCrust);
  //     console.log("Total: " + total);
  //     order = order + 1;
  //     grandTotal = grandTotal + total;

  //     var newPizza = new Pizza(pizzaSize, toppings, pizzaCrust, total, order);

  //     var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="table-size">' + $("#table-size option:selected").text() + newPizza.size + '</td><td id="table-toppings">' + $("#table-toppings option:selected").text() + newPizza.toppings + '</td><td id="table-crust">' + $("#table-crust option:selected").text() + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

  //     $("#pizza").append(newRow);

  //     //Prevent Default Refreshing
  //     event.preventDefault();
  //     this.reset();
  //   })
  // });
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
  var grandTotal = 0;
  order = order + 1;
  grandTotal = grandTotal + total;

  var newPizza = new Pizza(pizzaSize, topingsCost, pizzaCrust, total, order);
  console.log(newPizza);
  var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="table-size">' + $("#table-size option:selected").text() + newPizza.size + '</td><td id="table-toppings">' + $("#table-toppings option:selected").text() + newPizza.toppings + '</td><td id="table-crust">' + $("#table-crust option:selected").text() + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'
  $("#pizza").append(newRow);
  document.getElementById("order-form").reset();
}