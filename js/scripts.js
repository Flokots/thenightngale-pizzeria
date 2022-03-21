//User Interface Logic
$(document).ready(function () {
  $("#order").hide();
  $("orderbutton").click(function (event) {
    event.preventDefault();
    var name = $("input#fname").val();
    alert(`${name}, thank you for placing your order.`);
    ("#orderform").reset();
  });
})

  // $("#order-button").click(function (event) {
  //   event.preventDefault();
  //   alert("Thank you for placing your order!")
  //   $("#orderform").reset();
  // })
