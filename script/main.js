var total = 0;
var userInput1 = "zebra";
var userInput2;

function multiIt(x, y) {
  total = x * y;
}

function divIt(x, y) {
  total = x / y;
}

function addIt(x, y) {
  total = x + y;
}

function subIt(x, y) {
  total = x - y;

}

function storeIt() {
  if (userInput1 == "zebra") {
    userInput1 = parseFloat($("input").val());
  } else {
    userInput2 = parseFloat($("input").val());
  }
}

function appendIt(x) {
  $("input").val(total);
}


$(document).ready(function() {

  $(".math").on("click", function() {
    storeIt();
    $("input").val(" ").addClass($(this).attr("id"));

  });

  $(".equal").on("click", function() {
    storeIt();
    $("input").val(" ");
    if ($("input").hasClass("divide")) {
      divIt(userInput1, userInput2);
      appendIt(total);
      $("input").removeClass("divide");
      userInput1 = total;
    } else if ($("input").hasClass("multiply")) {
      multiIt(userInput1, userInput2);
      appendIt(total);
      $("input").removeClass("multiply");
      userInput1 = total;
    } else if ($("input").hasClass("subtract")) {
      subIt(userInput1, userInput2);
      appendIt(total);
      $("input").removeClass("subtract");
      userInput1 = total;
    } else if ($("input").hasClass("add")) {
      addIt(userInput1, userInput2);
      appendIt();
      $("input").removeClass("add");
      userInput1 = total;
    }
  });

  $(".num").on("click", function() {
    $("input").val($(this).attr("id"));
  });

  $(".clear").on("click", function() {
    $("input").val($(this).attr("id"));
    total = 0;
    userInput1 = "zebra";
    userInput2 = "party";
  });

  // $(".plus").on("click", function() {
  //   storeIt();
  //   $("input").val(" ").addClass("add");
  //
  // });
  //
  // $(".sub").on("click", function() {
  //   storeIt();
  //   $("input").val(" ").addClass("subtract");
  //
  // });
  //
  // $(".multi").on("click", function() {
  //   storeIt();
  //   $("input").val(" ").addClass("multiply");
  //
  // });
  //
  // $(".divide").on("click", function() {
  //   storeIt();
  //   $("input").val(" ").addClass("divide");
  //
  // });

});
