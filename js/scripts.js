$(document).ready(function() {
$("#submit").click(function() {


var selection = document.getElementById("LocationSelection");
x = selection.options[location.selectedIndex].text;
alert(x);

    });


   $("#display").click(function() {
      $('.allMechanics').toggle();
});
   
   $("#contact1").click(function() {
    
      $('table').toggle();


});
 });
