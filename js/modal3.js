$(document).ready(function(){

  //각 목록을 클릭했을때.....
  $(".menu").click(function(){ 
    $(this).next().show(); 
    $("html").css({overflowY:"hidden"}); 
    return false;
  });

  //close버튼과 검정배경영역을 클릭할때.....
  $(".close, .pop").click(function(){
    $(".pop").hide(); 
    $("html").css({"overflow-y":"scroll"}); 
  });

});