$(function(){

  //500pxの高さに行ったら戻るボタンを表示させる
  var scrollBtn=$("#page-top");

  scrollBtn.hide();

  $(window).scroll(function(){
    if($(this).scrollTop() > 500){
      //スクロールボタン発生させる
      scrollBtn.show();
    } else {  
      //スクロールボタン発生させない
      scrollBtn.fadeOut();
    }
  });


  //クリックしたらトップに戻る処理

  $("#page-top").click(function(){

    $("html,body").animate({
      scrollTop:0
    },500)

  });

  
  //openクラスが持っていたら取り外し、持っていなければ付け足す
  $(".many-question li").click(function(){
    $(this).next().slideToggle();
    $(this).toggleClass("open");


    });


     //ディスプレイフレックスのアコーディオンメニュー

      $(".division li").click(function(){
        

        //スライドさせて次のアンサーの要素をここで出す
        $(this).next().slideToggle();
        $(this).toggleClass("open");

      });


});