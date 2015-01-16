jQuery.noConflict();

(function( $ ) {
  //Mega Menu
  megaMenu.init();
  //Academic Catalog
  //academicCatalog.init();
  //Banner Slider
  $('.flexslider').flexslider({});
  //Show Hide Pannel       
  var icons = {
    header: "ui-icon-plus",
    activeHeader: "ui-icon-minus"
  };
      
  $( "#accordion" ).accordion({
    active: false,
    collapsible: true,
    heightStyle: "content",
    icons:icons,
    header: "h4"
  });
  $( "#accordion2" ).accordion({
    active: false,
    collapsible: true,
    heightStyle: "content",
    icons:icons,
    header: "h4"
  });
  $( "#library-accordion" ).accordion({
    active: 1,
    collapsible: true,
    heightStyle: "content"
  });
     
  //Mobile Menu
  $(".search-circle").on("click touchstart", function(e){
    e.stopPropagation();
    e.preventDefault();
    $(".searchTop").toggle();
  })

  $(".showhide .icon").on("click touchstart", function(e){
    e.stopPropagation(); 
    e.preventDefault();
    $("#cse-mega-menu").toggle();

  });

  //known mobile resize event issues
  if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
    //Mobile Menus Resize Event
    $(window).resize(function(){       
      if(window.innerWidth <= 959){
        $("#cse-mega-menu").hide();
      }else{
        $("#cse-mega-menu").show();
      } 
 
      //Mobile Sub Menus Resize Event
      if(window.innerWidth <= 767){
        $(".searchTop").hide();
        $(".sideNav").hide();
        $(".admissionsSideNav").hide();
        $(".progContact").hide();
      }else{
        $(".searchTop").show();
        $(".sideNav").show();
        $(".admissionsSideNav").show();
        $(".progContact").show();
      }   
    });
  }
  //Mobile Sub Menus
  $(".showhideSub .icon").on("click touchstart", function(e){
    e.stopPropagation(); 
    e.preventDefault();      
    $(".sideNav").toggle();
    $(".admissionsSideNav").toggle();
    $(".progContact").toggle();
  }); 
  //Go to the top button
  $(window).scroll(function() {
    if($(this).scrollTop() > 100){
      $('#goTop').fadeIn();
    }
    else{
      $('#goTop').fadeOut();
    }
  });
  $('#goTop').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

})( jQuery );