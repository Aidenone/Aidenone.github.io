var $window = $(window),
$stickyEl = $('#test'),
elTop = $stickyEl.offset().top;

$window.scroll(function() {
    $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
});
$stickyEl.click(function() {
  $stickyEl.toggleClass('displayed');
  //nav.displayed;
});