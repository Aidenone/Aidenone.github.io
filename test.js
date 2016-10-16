var $window = $(window),
$stickyEl = $('#test'),
$stickyEl2 = $('#test-shadow'),
elTop = $stickyEl.offset().top;

$window.scroll(function() {
    $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
    $stickyEl.removeClass('displayed');
 	$("#test2").css("display","none");
 	if($(".menu-icon").hasClass('fa-times')){
 		$(".menu-icon").addClass('fa-bars');
 		$(".menu-icon").removeClass('fa-times');
 	}
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