$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val().toUpperCase();
    

    $(".person1").text(person1Input);

    $("#story").show();
  });
});