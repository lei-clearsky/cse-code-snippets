var megaMenu=(function($) {

  var b = $("#cse-mega-menu > ul > li"),
      g = b.children("a.dropdown"),
      c = $("body"),
      d = -1;
    
  function f() {
      g.on("click",a);
      b.on("click",function(h){h.stopPropagation()})
  }
  
  function a(j) {

    if(d !== -1){
      b.eq(d).removeClass("cse-mega-menu-open")
    }
    
    var i = $(j.currentTarget).parent("li"),
        h = i.index();
    
    if(d === h) {
      i.removeClass("cse-mega-menu-open");
      d = -1
    } else {
      i.addClass("cse-mega-menu-open");
      d = h;
      c.off("click").on("click", e)
    }

    return false;
  }

  function e(h){
      b.eq(d).removeClass("cse-mega-menu-open"); 
      d = -1
  }
    
  return{init: f}
  
})(jQuery);