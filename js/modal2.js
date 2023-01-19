$(document).ready(function(){

  $(".modal-notice").click(function(){
    $(".modal").addClass("active");
  });

  $(".btn-close").click(function(){
    $(".modal").removeClass("active");
  });
	
});