$(function(){
  
  $(function() {
  var $win = $(window),
      $cloneNav = $('nav').clone().addClass('clone-nav').appendTo('body'),
      showClass = 'is-show';
    $(".nav-item").click(function(){
        var id =$(this).attr("href")
        var position=$(id).offset().top
        $("html, body").animate({
          "scrollTop":position
          },500)
      })
  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 800) {
      $cloneNav.addClass(showClass);
    } else {
      $cloneNav.removeClass(showClass);
    }
  });
});
  
$(".nav-item").click(function(){
    var id =$(this).attr("href")
    var position=$(id).offset().top
    $("html, body").animate({
      "scrollTop":position
      },500)
  })
  
});