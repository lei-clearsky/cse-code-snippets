var mobileMenuToggle = (function($) {

	var searchIcon = $(".search-circle"),
		searchBar = $(".searchTop"),
		cseMenuTrigger = $(".showhide .cse-menu-trigger"),
		cseMegaMenu = $("#cse-mega-menu"),
		cseShowhideBox = $(".showhide");

	var initToggle = function() {
		searchIcon.on("click touchstart", function(e) {
			e.stopPropagation();
			e.preventDefault();
			searchBar.toggle();
		})

		cseMenuTrigger.on("click touchstart", function(e) {
			e.stopPropagation();
			e.preventDefault();

			if(cseMegaMenu.hasClass("cse-mega-menu-display")) {
				cseMegaMenu.removeClass("cse-mega-menu-display");
				cseShowhideBox.removeClass("cse-menu-open");
			}else {
				cseMegaMenu.addClass("cse-mega-menu-display");
				cseShowhideBox.addClass("cse-menu-open");
			}
		})
	}
    
  return{init: initToggle}
  
})(jQuery);