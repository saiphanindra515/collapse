$(document).ready(function(){
$("#para1").hide();
$("#para2").hide();
$("#para3").hide();
$(".box1").hide();
$(".box2").hide();
$("#first").click(function(){

$(".box1").toggle(500);

});
$("#second").click(function(){

$(".box2").toggle(500);

});
 $("#both").click(function(){

$(".cont").toggle(500);

 });
 $("#col1").click(function(){
 
 $("#para1").toggle(300);
 $("#para2").hide(300);
 $("#para3").hide(300);

 });
 $("#col2").click(function(){
  $("#para2").toggle(300);
  $("#para1").hide(300);
  $("#para3").hide(300);

 });
 $("#col3").click(function(){

$("#para3").toggle(300);
$("#para1").hide(300);
$("#para2").hide(300);

 });

});