//Check off specific todos by clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "li span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

//Entering a new todo inside the input
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    //grabbing new Todo text from input
    var todoText = $(this).val();
    //removing todo text from input
    $(this).val("");
    //create a new li and add to ul
    $("ul").append(
      "<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>"
    );
  }
});

//Toggling the input using icon
$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle(200);
});
