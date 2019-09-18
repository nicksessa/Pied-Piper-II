$(document).ready(function(){
  $("#loginBtn").on("click", function(){
    event.preventDefault();
    $("#myModal").css('display', 'block');
  });
  
  
  
  $(".close").on("click", function(){
    $("#myModal").css('display', 'none')
  });

})







