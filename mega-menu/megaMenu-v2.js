// --------- Mega Menu ------------ //
var cbpHorizontalMenu=(function($){
  var settings = {
    speed        :300,
    delay        :0  
  };
  var b=$("#cbp-hrmenu > ul > li"),
  g=b.children("a.dropdown"),
  c=$("body"),
  d=-1;
    
  function f(){
    g.on("click",a);
    b.on("click",function(h){h.stopPropagation()})
    }
  function a(j){
    if(d!==-1){
      b.eq(d).children('.cbp-hrsub').delay(settings.delay).slideUp(settings.speed).focus();
    }
      var i=$(j.currentTarget).parent("li"),
        h=i.index();
    if(d===h){
      i.children('.cbp-hrsub').delay(settings.delay).slideUp(settings.speed).focus();
      d=-1
    }else{
      i.children('.cbp-hrsub').delay(settings.delay).slideDown(settings.speed).focus();
      d=h;
      c.off("click").on("click",e)
    }
    return false;
  }
  function e(h){
    b.eq(d).children('.cbp-hrsub').delay(settings.delay).slideUp(settings.speed).focus();

    d=-1
    }
    
  return{init:f}
})(jQuery);

