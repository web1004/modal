$(document).ready(function(){
	
  //각 목록을 클릭했을때.....
  $(".item_list>li").click(function(){

    g_pop=$(this).index();

    $(".g_page span:nth-child(1)").text(g_pop+1);  //오른쪽 상단 페이지번호
    $("html").css({"overflow-y":"hidden"}); //기존 html 스크롤 숨기기
    $(".pop>li").eq(g_pop).show();  //각 목록의 내용
    $("#popup").stop().fadeIn(); //검정배경

  });

  //이전다음버튼....
  $(".left_btn").click(function(){
    if(g_pop>0){
      $(".pop>li").eq(g_pop).stop().fadeOut(); 
      g_pop--;
      $(".g_page span:nth-child(1)").text(g_pop+1);
			$(".pop>li").eq(g_pop).stop().fadeIn();
    };
  });

  $(".right_btn").click(function(){
    if(g_pop<14){
      $(".pop>li").eq(g_pop).stop().fadeOut(); 
      g_pop++;
      $(".g_page span:nth-child(1)").text(g_pop+1);
			$(".pop>li").eq(g_pop).stop().fadeIn();
    };
  });

   //닫기버튼.....
  $(".btn_close").click(function(){
    $("html").css({"overflow-y":"scroll"}); 
    $("#popup").stop().fadeOut();
		$(".pop>li").stop().hide();
  });

});