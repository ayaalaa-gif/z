$(function () {
   $("#drop").click(function() {
       $(".drop").css("display","block")
   })  
   $("#weight").click(function() {
       $(".weight").css("display","block")
   })  
   $("#heart").click(function() {
       $(".heart").css("display","block")
   })  
   $(".med-close").click(function() {
       $(this).parent().css("display","none")
   })

})