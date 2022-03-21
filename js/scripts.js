$(document).ready(function () {
  // $("#table-order").hide();
  $("#order-form").submit(function (event) {
    //Initialize order and grandtotal values
    var order = 1;
    var grandTotal = 0;
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
    console.log("Size value: " + pizzaSize,  "Crust value: " + pizzaCrust, toppingsArray);
    //Prevent Default Refreshing
    event.preventDefault();
    this.reset();
  })
  $('#order-button').click(function () {
    // $("#table-order").show();
    // $("#order-button").hide();

    // $("#size").html($("#size option:selected").text() + " - " + pizzaSize);
    // $("#toppings").html($("#toppings option:selected").text() + " - " + topingsCost);
    // $("#crust").html($("#crust option:selected").text() + " - " + pizzaCrust);
    // $("#total").html(total);

    // function Pizza(size, toppings, crust, total, orderNo) {
    //   this.size = size;
    //   this.toppings = toppings;
    //   this.crust = crust;
    //   this.total = total;
    //   this.orderNo = orderNo;
    // }

    // $('button-add-pizza').click(function () {
    //   var pizzaSize = $("#size option:selected").val();
    //   var toppingsArray = new Array();
    //   $("#order-form input[type=checkbox]:checked").each(function () {
    //     toppingsArray.push(this.value);
    //   });
    //   if (toppingsArray.length > 0) {
    //     var unitCost = 100;
    //     var topingsCost = parseInt(toppingsArray.length) * unitCost;
    //   }
    //   var pizzaCrust = $("#crust option:selected").val();
    //   var total = parseInt(pizzaSize) + topingsCost + parseInt(pizzaCrust);
    //   order = order + 1;
    //   grandTotal = grandTotal + total;

    //   var newPizza = new Pizza(pizzaSize, toppingsArray, pizzaCrust, total, order);

    //   var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

    //   $("#pizza").append(newRow);

    // });

  });
})