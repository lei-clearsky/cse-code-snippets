var onScrollHeader = (function() {
	var docElem = document.documentElement,
		scroll = false,
		headerOnScroll = $('.top-header-wrap');
		towerOnScroll = $('.tower-logo-display');
		changeHeaderOn = 90;

	function initHeaderScroll() {
		window.addEventListener( 'scroll', function( event ) {
			if( !scroll ) {
				scroll = true;
				setTimeout( headerScroll, 250 );
			}
		}, false );
	}

	function headerScroll() {
		var headerY = headerScrollY();
		if ( headerY >= changeHeaderOn && window.innerWidth > 960 ) {
			headerOnScroll.addClass("fix-top-header");
			towerOnScroll.addClass('toggle-display');
		}
		else {
			headerOnScroll.removeClass("fix-top-header");
			towerOnScroll.removeClass('toggle-display');
		}
		scroll = false;
	}

	function headerScrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	initHeaderScroll();

})();