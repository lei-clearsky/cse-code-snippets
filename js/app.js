jQuery.noConflict();

(function( $ ) {
  megaMenu.init();
  mobileMenuToggle.init();
  onScrollHeader.init();
  $('.flexslider').flexslider({});
  Grid.init();
  //goToTop;
  
  academicCatalog.init();

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

})( jQuery );
