var $window = $(window),
$stickyEl = $('.menu'),
elTop = $stickyEl.offset().top;

$window.scroll(function() {
    $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
});
$(".menu-icon").click(function() {
  $stickyEl.toggleClass('displayed');
  $("#test2").toggle();
  if($(".menu-icon").hasClass('fa-bars')){
  	$(".menu-icon").addClass('fa-times');
  	$(".menu-icon").removeClass('fa-bars');
  } else {
  	$(".menu-icon").addClass('fa-bars');
  	$(".menu-icon").removeClass('fa-times');
  }
  //nav.displayed;
});