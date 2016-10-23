$(document).ready(function () {
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

  var statut = "Développeur WEB";
  var i = 0;
  var ecrit = function(){
    $(".statut").append(statut[i])
    i++;
  };
  setInterval(ecrit,150);

  var signe = -1;
  var clignotement = function(){
    var obj = document.getElementById('type-bar');
    if(obj.style.opacity >= 0.96) {
      signe = -1
    }
    if(obj.style.opacity <= 0.04) {
      signe = 1
    }
    obj.style.opacity = (obj.style.opacity * 1) + (signe * 0.04);
  };
  periode = setInterval(clignotement, 20);

  if (window.matchMedia("(max-width: 911px)").matches) {
    console.log('petit');
  }

  $(".menu-cont").click(function() {
    $(".nav-elem").toggle();
  });
};