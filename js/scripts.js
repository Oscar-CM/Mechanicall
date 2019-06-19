$(document).ready(function() {
$("#submit").click(function() {

   $("#locationSelection").on("change",function(){
        var selValue = $("#locationSelection :selected").text();


    });

        $('h2').html(selValue);
      });

   $("#display").click(function() {
      $('.allMechanics').toggle();
});

});
