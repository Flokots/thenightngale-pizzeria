$(document).ready(function () {
  $("#table-order").hide();

  $('#order-button').click(function (event) {
    event.preventDefault();
    var pizzaSize = $("#size option:selected").val();
    var pizzaCrust = $("#crust option:selected").val();
    var toppingsArray = new Array();
    $("#order-form input[type=checkbox]:checked").each(function () {
      toppingsArray.push(this.value);
    });
    if (toppingsArray.length > 0) {
      var unitCost = 100;
      var topingsCost = parseInt(toppingsArray.length) * unitCost;
      alert("Toppings Cost: " + topingsCost);
    }
    var total = parseInt(pizzaSize) + topingsCost + parseInt(pizzaCrust);
    var order = 1;
    var grandTotal = 0;

    $("#size").html($("#size option:selected").text() + " - " + pizzaSize);
    $("#toppings").html($("#toppings option:selected").text() + " - " + topingsCost);
    $("#crust").html($("#crust option:selected").text() + " - " + pizzaCrust);
    $("#total").html(total);

    function Pizza (size, toppings, crust, total, orderNo) {
      this.size = size;
      this.toppings = toppings;
      this.crust = crust;
      this.total = total;
      this.orderNo = orderNo;
    }

    $('button-add-pizza').click(function () {
      var pizzaSize = $("#size option:selected").val();
      var toppingsArray = new Array();
      $("#order-form input[type=checkbox]:checked").each(function () {
        toppingsArray.push(this.value);
      });
      if (toppingsArray.length > 0) {
        var unitCost = 100;
        var topingsCost = parseInt(toppingsArray.length) * unitCost;
      }
      var pizzaCrust = $("#crust option:selected").val();
      var total = parseInt(pizzaSize) + topingsCost + parseInt(pizzaCrust);
      order = order + 1;
      grandTotal = grandTotal + total;


      var newPizza = new Pizza(pizzaSize, toppingsArray, pizzaCrust, total, order);

      var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

      $("#pizza").append(newRow);
    });
  })
})