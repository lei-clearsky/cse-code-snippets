var goToTop = (function($) {
  //Go to the top button
  $(window).scroll(function() {
      var el = document.getElementById("goTop");
      if($(this).scrollTop() > 100 && el.style.opacity <= 0){
        fade('in', 750, el, true);
      }else if($(this).scrollTop() <= 100 && el.style.opacity >= 1){
        fade('out', 750, el, true);
      }
  });
  
  $('#goTop').click(function() {
      $('html, body').animate({
         scrollTop: 0
      }, 500);
      return false;
  });
  
  var fade = function(type, duration, el, IE) {
    var isIn = type === 'in',
      opacity = isIn ? 0 : 1,
      interval = 50,
      gap = interval / duration;
          
      if(isIn) {
           el.style.display = 'block';
           el.style.opacity = opacity;
           if(IE) {
              el.style.filter = 'alpha(opacity=' + opacity + ')';
              el.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(Opacity=' + opacity + ')';
          }
      }
      
      var func = function() {
          opacity = isIn ? opacity + gap : opacity - gap; 
          el.style.opacity = opacity;
          if(IE) {
              el.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
              el.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(Opacity=' + opacity * 100 + ')';
          }
          
          if(opacity <= 0 || opacity >= 1) window.clearInterval(fading);
          if(opacity <= 0) el.style.display = 'none';
      }
      
      var fading = window.setInterval(func, interval);
  }
})(jQuery);