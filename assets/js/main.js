(function ($) {
"use strict";



  /* ==========================================
  Sticky menu
  =============================================*/

  $(window).on('scroll', function (){

    var scroll = $(window).scrollTop();

    if(scroll > 30) {
      $(".header-area").addClass("sticky");
    } else{
      $(".header-area").removeClass("sticky"); 
    }
  });

  /* ==========================================
  Scroll 
  =============================================*/
  
  $('#main-menu-wrapper a').on('click', function(e){
      e.preventDefault();
      $("html, body").animate({
          scrollTop:$(this.hash).offset().top - 0
      },800);
  });

  /* ==========================================
  Navbar fix
  =============================================*/

  $(document).on( "click", ".header-area .navbar-nav li>a",
    function (e) {
      e.preventDefault();
      }
    );

    
  $(window).on("load", function () { 

    if ($("#main-menu-wrapper").length) {
      $("#main-menu-wrapper").slicknav({
        prependTo: ".mobile-menu",
      });
    }
  });

	/* ==================================================
   	Protfolio Section Mesonry
   ==================================================== */
		var $Container = $("#protfolio-mesonry");
		if ($Container.length > 0) {
		  $("#protfolio-mesonry").imagesLoaded(function () {
			var festivarMasonry = $Container.isotope({
			  itemSelector: ".masonry-item", // use a separate class for itemSelector, other than .col-
			  masonry: {
				gutter: 0,
			  },
			});
			$(document).on("click", ".filter-btn-wrapper li", function () {
			  var filterValue = $(this).attr("data-filter");
			  festivarMasonry.isotope({
				filter: filterValue,
			  });
			});
		  });
		  $(document).on("click", ".filter-btn-wrapper li", function () {
			$(this).siblings().removeClass("active-btn");
			$(this).addClass("active-btn");
		  });
		}

/* ==============================================
==== services-active ======
================================================= */

$('.hero-active').owlCarousel({
	loop:true,
  	items:1,
  	autoplay:false,
	nav:true,
  	navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
  	dots:true,
  	 autoplayHoverPause: false,
  	autoplaySpeed: 800,
	responsive:{
	 	0:{
	 		items:1,
	 		nav:true,
	 	},
	 	767:{
	 		items:1,
	 		nav:true,
	 	},
	 	992:{
	 		items:1,
	 		nav:true
		},
	 	1200:{
	 		items:1,
	 		nav:true
	 	},
	 	1600:{
	 		items:1,
	 		nav:true
	 	}
	 }
});
/* ==============================================
==== services-active ======
================================================= */

$('.services-active').owlCarousel({
	loop:true,
	margin:15,
  	items:4,
  	autoplay:false,
	nav:true,
  	navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
  	dots:false,
  	 autoplayHoverPause: false,
  	 autoplaySpeed: 800,
	 responsive:{
	 	0:{
	 		items:1,
	 		nav:true,
	 	},
	 	767:{
	 		items:2,
	 		nav:true,
	 	},
	 	992:{
	 		items:3,
	 		nav:true
	 	},
	 	1200:{
	 		items:4,
	 		nav:true
	 	},
	 	1600:{
	 		items:4,
	 		nav:true
	 	}
	 }
});

/* ==============================================
==== subcribe-active ======
================================================= */

$('.subcribe-active').owlCarousel({
	loop:true,
	margin:20,
  	items:1,
  	autoplay:false,
	nav:false,
  	//navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
  	dots:true,
  	 autoplayHoverPause: false,
  	 autoplaySpeed: 800,
	 responsive:{
	 	0:{
	 		items:1,
	 		nav:false,
	 	},
	 	767:{
	 		items:1,
	 		nav:false,
	 	},
	 	992:{
	 		items:1,
	 		nav:false
	 	},
	 	1200:{
	 		items:1,
	 		nav:false
	 	},
	 	1600:{
	 		items:1,
	 		nav:false
	 	}
	 }
});


/* ============================================
 Counter Up JS
 ============================================ */
 
 $('.counter').counterUp({
	delay: 10,
	time: 10000,
});

/* ==============================
 wow js
 ============================== */

new WOW().init();

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


/* Masonary */
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});	



//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});



})(jQuery);	