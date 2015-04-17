$(function() {
  $('.toggle-nav').click(function() {
    toggleNav();
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      if ($('#site-wrapper').hasClass('show-nav')) {
        // Assuming you used the function I made from the demo
         toggleNav();
      }
    } 
  });
});

var toggleNav = function() {
  if ($('#site-wrapper').hasClass('show-nav')){
    $('#site-wrapper').removeClass('show-nav');
  } else {
    $('#site-wrapper').addClass('show-nav');
  }
}

