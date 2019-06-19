$(document).ready(function() {
$("#submit").click(function() {

   $("#locationSelection").on("change",function(){
        var selValue = $("#locationSelection").val();


    });
   alert("the value is " + selValue);
      });

   $("#display").click(function() {
      $('.allMechanics').toggle();
});

});
