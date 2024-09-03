/**
 *
 * -----------------------------------------------------------------------------
 *
 * Template : Tact | Creative HTML5 Template for Saas, Startup & Agency
 * Author : abctechweb
 * Author URI : http://abctechweb.com/
 *
 * -----------------------------------------------------------------------------
 *
 **/

(function($) {
  "use strict";
  $(document).ready(function() {
    menuToggle();
  });

  $(window).on('scroll', function() {
    $('.contact-toggle').removeClass('open');
    $('.menu-wrapper').removeClass('show');
    $('body').removeClass('body-fixed');
    $('.link-item').removeClass('show');
    $('.menu-toggle').removeClass('open');
  });

  // menuToggle Init
  function menuToggle() {
    $('body').on('click', '.contact-toggle', function(e) {
      e.preventDefault();
      $(this).toggleClass('open');
      $('.menu-wrapper').toggleClass('show');
      $('body').toggleClass('body-fixed');
      $('.link-item').toggleClass('show');
    });

    $('body').on('click', '.close-sidenav', function() {
      $('.menu-wrapper').removeClass('show');
    });
  };

  //preloader
  $(window).on('load', function() {
    $("#loader-wrapper").delay(2000).fadeOut(500);
    $(".spinner").on('click', function() {
      $("#loader-wrapper").fadeOut(500);
    })
  });

  // sticky menu
  var header = $('.menu-sticky');
  var searchBox = $('.search-wrapper');
  var win = $(window);
  win.on('scroll', function() {
    var scroll = win.scrollTop();
    if (scroll < 150) {
      header.removeClass("sticky");
      header.addClass("header2");
      searchBox.removeClass("sticky-search");
    } else {
      header.addClass("sticky");
      header.removeClass("header2");
      searchBox.addClass("sticky-search");
    }
  });

  //Add Menu active class dynamically
  $(document).ready(function() {
    var url = window.location;
    $('ul.nav-menu a[href="' + url + '"]').parent().addClass('active');
    $('ul.nav-menu a').filter(function() {
      return this.href == url;
    }).parent().addClass('active');

    if ($('ul.nav-menu .sub-menu li').hasClass('active')) {
      $('ul.nav-menu .sub-menu li.active').closest(".menu-item-has-children").addClass('current-menu-item current_page_item');
      $('ul.nav-menu .sub-menu li.active').closest(".sub-mega.menu-item-has-children").addClass('current-menu-item current_page_item');
    }
  });

  // Get the Contact Form
  var formSelect = $('#contact_form');
  // Get the messages div.
  var formMessages = $('#form-messages');
  // Set up an event listener for the contact form.
  $(formSelect).submit(function(e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(formSelect).serialize();

    // Submit the form using AJAX.
    $.ajax({
        type: 'POST',
        url: $(formSelect).attr('action'),
        data: formData
      })
      .done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $('#first-name, #email, #phone, #website, #message').val('');
      })
      .fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        // Set the message text.
        if (data.responseText !== '') {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
      });
  });

  //Off Canvas Menu
  if ($('.nav_trigger').length) {
    $(".nav_trigger").on("click", function() {
      $("body").toggleClass("show_sidebar");
    });
  }

  if ($('.hamburger-menu-container').length) {
    $(".hamburger-menu-container ul li").on('click', function() {
      $(this).children('.sub-menu').slideToggle();
    });
  }


  //Body loader class added after sometime
  $(window).on('load', function() {
    setTimeout(function() {
      $('body').addClass('loaded');
      setTimeout(function() {
        AOS.init({
          duration: 600,
          once: true, // whether animation should happen only once - while scrolling down
        });
        $('.loader').remove();
      }, 200);
    }, 500);
  });

  //fixed sidebar
  $('.sidebar-area').theiaStickySidebar({
    // Settings
    additionalMarginTop: 200,
    additionalMarginBottom: 200
  });

  //fixed Header
  if ($('header').hasClass('fixed-side-menu')) {
    $('body').addClass('fixed-menu');
    var menuWidth = $('.fixed-side-menu .full-sidebar-menu').width();
    $(".fixed-menu #main_content").css({
      paddingLeft: menuWidth
    });
  }

  //fixed blog sidebar
  $('.content, .sidebar').theiaStickySidebar({
    additionalMarginTop: 30
  });

  //Mobile Menu Class
  var window_width = '992px';
  if (matchMedia('only screen and (max-width: 991px)').matches) {
    $(document).ready(function() {
      $('.header-bottom').addClass('mobile-menu');
    });
  }

  //screen resize add remove class
  $(window).resize(function() {
    var $theWindowSize = $(this).width();
    if ($theWindowSize < 992) {
      $('.header-bottom').addClass('mobile-menu');
      $('.header-bottom .em-menu').hide();
    } else {
      $('.header-bottom').removeClass('mobile-menu');
      $('.header-bottom .em-menu').show();
    }
  });


  //header toggle icon class
  $(".header-menu .em-menu-toggle").on('click', function() {
    $('.mobile-menu .em-menu').slideToggle();
    $('.em-menu-toggle i').removeClass('fa fa-bars');
    $(this).toggleClass('expand-menu');
    if ($(this).hasClass('expand-menu')) {
      $('.em-menu-toggle i').html('<i class="fa fa-times"></i>');
    } else {
      $('.em-menu-toggle i').html('<i class="fa fa-bars"></i>');
    }
  });

  //Menu slide toggle
  $(".menu-toggle .menu-icon").on('click', function() {
    $('.mobile-menu .em-menu').slideToggle();
    $(this).parents('.menu-toggle').toggleClass('open');
  });

  //Slide search bar
  if ($('.seach_bar').length) {
    $('.seach_bar').on("click", function() {
      $('.search_box').slideToggle();
    });
  }

  $("#header-search, #header-search button.close").on("click keyup", function(event) {
    if (
      event.target === this ||
      event.target.className === "close" ||
      event.keyCode === 27
    ) {
      $(this).removeClass("open");
      $("body").removeClass("open-search");
    }
  });

  /*-------------------------------------
      Hamburgernav Menu Start
  -------------------------------------*/
  jQuery(document).ready(function() {
    "use strict";
    $('.tact-right-sidebar-wrp .offcanvas-cpt-wrp .link').on('click', function(event) {
      event.preventDefault();
    });

    hamburgernav_menu_right();
    hamburgernav_menu_left();
    hamburgernav_left_fix_function();
    hamburgernav_right_fix_function();

    $(".toggle-shares").on('click', function(e) {
      $(this).siblings('.social-share-wrapper').toggleClass('show-shares');
    });
  });

  //Fixed menu left Jquery
  function hamburgernav_left_fix_function() {
    "use strict";
    var button = jQuery('.tact-left-sidebar-wrp .offcanvas-cpt-wrp .link');
    var rightpart = jQuery('.tact-left-sidebar-wrp .inner-cover .sidebar-shape');
    var rightpart2 = jQuery('.main_content');
    button.on('click', function(e) {
      e.preventDefault();
      var offsetY = window.pageYOffset;
      var element = jQuery(this);
      if (element.hasClass('opened left')) {
        setTimeout(function() {
          element.removeClass('opened left');
          rightpart.removeClass('opened left');
          rightpart2.removeClass('opened left');
          $('body').css({
            overflow: 'visible',
            height: 'auto'
          });
        }, 500);

      } else {
        element.addClass('opened left');
        rightpart.addClass('opened left');
        rightpart2.addClass('opened left');
        $('body').css({
          overflow: 'hidden',
          height: '100%'
        });
      }
    });
  }
  if ($('.menu-sticky').hasClass('tact-left-sidebar-wrp')) {
    $('body').addClass('left-menu-fixed');

    var left_body = $('body');
    var win = $(window);
    win.on('scroll', function() {
      var scroll = win.scrollTop();
      if (scroll < 150) {
        left_body.removeClass("space-left");

      } else {
        left_body.addClass("space-left");
      }
    });
  }

  //Fixed menu Right Jquery
  function hamburgernav_right_fix_function() {
    "use strict";
    var button = jQuery('.tact-right-sidebar-wrp .offcanvas-cpt-wrp .link');
    var rightpart = jQuery('.tact-right-sidebar-wrp .inner-cover .sidebar-shape');
    var rightpart2 = jQuery('.main_content');
    button.on('click', function(event) {
      event.preventDefault();
      var element = jQuery(this);
      if (element.hasClass('opened right')) {
        setTimeout(function() {
          element.removeClass('opened right');
          rightpart.removeClass('opened right');
          rightpart2.removeClass('opened right');
          $('body').css({
            overflow: 'visible',
            height: 'auto'
          });
        }, 500);
      } else {
        element.addClass('opened right');
        rightpart.addClass('opened right');
        rightpart2.addClass('opened right');
        $('body').css({
          overflow: 'hidden',
          height: '100%'
        });
      }
    });
  }

  if ($('header div').hasClass('tact-right-sidebar-wrp')) {
    $('body').addClass('right-menu-fixed');
  }

  //Fixed menu Right Open Close
  function hamburgernav_menu_right() {
    "use strict";
    var offcanvas = new TimelineMax({
      paused: true
    });
    offcanvas.to(".tact-right-sidebar-wrp .offcanvas-cpt-wrp .trigger .one", 0.2, {
      y: 6,
      rotation: 45,
      ease: Expo.easeinOut
    });
    offcanvas.to(".tact-right-sidebar-wrp .offcanvas-cpt-wrp .trigger .two", 0.2, {
      y: -6,
      rotation: -45,
      ease: Expo.easeinOut,
      delay: -0.2
    });
    offcanvas.to(".tact-right-sidebar-wrp .offcanvas-cpt-menu", 0.2, {
      right: "90px",
      ease: Expo.easeinOut,
      background: "#fff",
      delay: -0.2
    });
    offcanvas.staggerFrom(".tact-right-sidebar-wrp .offcanvas-cpt-menu .inner-cover .nav-item-list > ul > li", 0.1, {
      y: 25,
      opacity: 0,
      ease: Expo.easeinOut
    }, 0.1);
    offcanvas.reverse();
    jQuery('.tact-right-sidebar-wrp .offcanvas-cpt-wrp .link').on('click', function() {
      offcanvas.reversed(!offcanvas.reversed());
      return false;
    });

    var aaaa = jQuery('.tact-right-sidebar-wrp .offcanvas-cpt-menu .inner-cover .nav-item-list > ul > li > a');
    aaaa.off().on('click', function(e) {
      e.stopPropagation();
      var element = jQuery(this);
      var url = element.attr('href');
      if (url !== '#' && url.charAt(0) === '#') {
        aaaa.parent().removeClass('active');
        element.parent().addClass('active');
        $('html, body').animate({
          scrollTop: $(url).offset().top - 115
        }, 1000);
      }
      return false;
    });
  }

  //Fixed Menu Left Open Close
  function hamburgernav_menu_left() {
    "use strict";

    var offcanvas = new TimelineMax({
      paused: true
    });
    offcanvas.to(".tact-left-sidebar-wrp .offcanvas-cpt-wrp .trigger .one", 0.2, {
      y: 6,
      rotation: 45,
      ease: Expo.easeinOut
    });
    offcanvas.to(".tact-left-sidebar-wrp .offcanvas-cpt-wrp .trigger .two", 0.2, {
      y: -6,
      rotation: -45,
      ease: Expo.easeinOut,
      delay: -0.2
    });
    offcanvas.to(".tact-left-sidebar-wrp .offcanvas-cpt-menu", 0.2, {
      top: 0,
      left: "90px",
      ease: Expo.easeinOut,
      delay: -0.2
    });
    offcanvas.staggerFrom(".tact-left-sidebar-wrp .offcanvas-cpt-menu .inner-cover .nav-item-list > ul > li", 0.1, {
      y: 25,
      opacity: 0,
      ease: Expo.easeinOut
    }, 0.1);
    offcanvas.reverse();

    jQuery('.tact-left-sidebar-wrp .offcanvas-cpt-wrp .link').on('click', function() {
      offcanvas.reversed(!offcanvas.reversed());
      return false;
    });
  }


  /*-------------------------------------
   OwlCarousel
   -------------------------------------*/

  $('.my-carousel').each(function() {
    var owlCarousel = $(this),
      loop = owlCarousel.data('loop'),
      center = owlCarousel.data('center'),
      items = owlCarousel.data('items'),
      margin = owlCarousel.data('margin'),
      stagePadding = owlCarousel.data('stage-padding'),
      autoplay = owlCarousel.data('autoplay'),
      autoplayTimeout = owlCarousel.data('autoplay-timeout'),
      smartSpeed = owlCarousel.data('smart-speed'),
      dots = owlCarousel.data('dots'),
      nav = owlCarousel.data('nav'),
      navSpeed = owlCarousel.data('nav-speed'),
      xsDevice = owlCarousel.data('mobile-device'),
      xsDeviceNav = owlCarousel.data('mobile-device-nav'),
      xsDeviceDots = owlCarousel.data('mobile-device-dots'),
      smDevice2 = owlCarousel.data('ipad-device2'),
      smDeviceNav2 = owlCarousel.data('ipad-device-nav2'),
      smDeviceDots2 = owlCarousel.data('ipad-device-dots2'),
      smDevice = owlCarousel.data('ipad-device'),
      smDeviceNav = owlCarousel.data('ipad-device-nav'),
      smDeviceDots = owlCarousel.data('ipad-device-dots'),
      mdDevice = owlCarousel.data('md-device'),
      mdDeviceNav = owlCarousel.data('md-device-nav'),
      mdDeviceDots = owlCarousel.data('md-device-dots');
    owlCarousel.owlCarousel({
      loop: (loop ? true : false),
      center: (center ? true : false),
      items: (items ? items : 4),
      lazyLoad: true,
      margin: (margin ? margin : 0),
      //stagePadding: (stagePadding ? stagePadding : 0),
      autoplay: (autoplay ? true : false),
      autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
      smartSpeed: (smartSpeed ? smartSpeed : 250),
      dots: (dots ? true : false),
      nav: (nav ? true : false),
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      navSpeed: (navSpeed ? true : false),
      responsiveClass: true,
      responsive: {
        0: {
          items: (xsDevice ? xsDevice : 1),
          nav: (xsDeviceNav ? true : false),
          dots: (xsDeviceDots ? true : false)
        },
        590: {
          items: (smDevice2 ? smDevice : 2),
          nav: (smDeviceNav2 ? true : false),
          dots: (smDeviceDots2 ? true : false)
        },
        768: {
          items: (smDevice ? smDevice : 3),
          nav: (smDeviceNav ? true : false),
          dots: (smDeviceDots ? true : false)
        },
        992: {
          items: (mdDevice ? mdDevice : 4),
          nav: (mdDeviceNav ? true : false),
          dots: (mdDeviceDots ? true : false)
        }
      }
    });
  });

  // Testimonial Carousel Default
  if ($('.testimonial-carousel-default').length) {
    $('.testimonial-carousel-default').owlCarousel({
      navigation: true,
      pagination: true,
      smartSpeed: 500,
      autoplayTimeout: 5000,
      stopOnHover: true,
      dots: false,
      nav: true,
      loop: true,
      autoplay: true,
      autoPlay: true,
      items: 3,
      margin: 30,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        590: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        },
        1199: {
          items: 3
        },
      }
    })
  }

  // Testimonial Carousel
  if ($('.testimonial-carousel').length) {
    $('.testimonial-carousel').owlCarousel({
      navigation: false,
      pagination: true,
      smartSpeed: 500,
      autoplayTimeout: 5000,
      stopOnHover: true,
      dots: false,
      nav: true,
      loop: true,
      autoplay: true,
      autoPlay: true,
      items: 2,
      margin: 30,
      navText: ["<i class='glyph-icon flaticon-next-1'></i>", "<i class='glyph-icon flaticon-next-1'></i>"],
      navContainer: '#testiNav',
      responsive: {
        0: {
          items: 1
        },
        590: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 2
        },
        1199: {
          items: 2
        },
      }
    })
  }

  // Testimonial Carousel2
  if ($('.testimonial-carousel2').length) {
    $('.testimonial-carousel2').owlCarousel({
      navigation: false,
      pagination: true,
      smartSpeed: 500,
      autoplayTimeout: 5000,
      stopOnHover: true,
      dots: false,
      nav: true,
      loop: true,
      autoplay: true,
      autoPlay: true,
      items: 1,
      margin: 0,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      navContainer: '#testiNav'
    })
  }

  // Testimonial Carousel2
  if ($('.testimonial-carousel4').length) {
    $('.testimonial-carousel4').owlCarousel({
      navigation: true,
      pagination: true,
      smartSpeed: 500,
      autoplayTimeout: 5000,
      stopOnHover: true,
      dots: false,
      nav: true,
      loop: true,
      autoplay: true,
      autoPlay: true,
      items: 3,
      margin: 30,
      navContainer: '#testiNav',
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
        0: {
          items: 1,
          center: false,
          nav: false
        },
        590: {
          items: 1,
          center: false,
          nav: false
        },
        768: {
          items: 2,
          center: false
        },
        992: {
          items: 2
        },
        1199: {
          items: 3
        },
      }
    })
  }

  // Blog Carousel Default
  if ($('.blog-carousel').length) {
    $('.blog-carousel').owlCarousel({
      navigation: true,
      pagination: true,
      smartSpeed: 500,
      autoplayTimeout: 5000,
      stopOnHover: true,
      dots: false,
      center: true,
      nav: true,
      loop: true,
      autoPlay: false,
      items: 3,
      margin: 30,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
        0: {
          items: 1,
          center: false,
          nav: false
        },
        590: {
          items: 1,
          center: false,
          nav: false
        },
        768: {
          items: 2,
          center: false
        },
        992: {
          items: 3
        },
        1199: {
          items: 3
        },
      }
    })
  }

  // Blog Carousel Three
  if ($('.blog-carousel3').length) {
    $('.blog-carousel3').owlCarousel({
      navigation: true,
      pagination: true,
      smartSpeed: 500,
      autoplayTimeout: 5000,
      stopOnHover: true,
      dots: false,
      nav: true,
      loop: true,
      autoplay: true,
      autoPlay: true,
      items: 3,
      margin: 30,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
        0: {
          items: 1,
          center: false,
          nav: false
        },
        590: {
          items: 1,
          center: false,
          nav: false
        },
        768: {
          items: 2,
          center: false
        },
        992: {
          items: 2
        },
        1199: {
          items: 3
        },
      }
    })
  }

  // Page Layout Carousel
  if ($('.layout-carousel').length) {
    $('.layout-carousel').owlCarousel({
      navigation: true,
      pagination: true,
      smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplaySpeed: 6000,
      slideTransition: 'linear',
      autoplayHoverPause: true,
      dots: false,
      center: false,
      nav: true,
      loop: true,
      items: 2,
      margin: 0,
      navText: '',
      responsive: {
        0: {
          items: 1,
          center: false,
          nav: false
        },
        590: {
          items: 1,
          center: false,
          nav: false
        },
        768: {
          items: 2,
          center: false
        },
        992: {
          items: 2
        },
        1199: {
          items: 2
        },
      }
    })
  }

  // Sponsor Carousel Default
  if ($('.sponsor-carousel').length) {
    $('.sponsor-carousel').owlCarousel({
      navigation: true,
      pagination: true,
      smartSpeed: 500,
      autoplayTimeout: 9000,
      stopOnHover: true,
      dots: false,
      nav: false,
      loop: true,
      autoplay: true,
      autoPlay: true,
      items: 5,
      margin: 30,
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 2,
        },
        590: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4
        },
        1199: {
          items: 5
        },
      }
    })
  }

  // Feature Carousel
  if ($('.feature-carousel').length) {
    $('.feature-carousel').owlCarousel({
      navigation: false,
      pagination: true,
      smartSpeed: 500,
      autoplayTimeout: 5000,
      stopOnHover: true,
      dots: false,
      nav: true,
      loop: true,
      autoplay: true,
      autoPlay: true,
      items: 3,
      margin: 30,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        590: {
          items: 2,
          nav: false
        },
        768: {
          items: 2,
        },
        992: {
          items: 3
        },
        1199: {
          items: 3
        },
      }
    })
  }

  // Portfolio Carousel
  if ($('.portfolio-carousel').length) {
    $('.portfolio-carousel').owlCarousel({
      navigation: false,
      pagination: true,
      smartSpeed: 500,
      autoplayTimeout: 8000,
      stopOnHover: true,
      dots: false,
      nav: true,
      loop: true,
      autoplay: true,
      autoPlay: true,
      items: 5,
      margin: 30,
      navText: ["<i class='glyph-icon flaticon-next-1'></i>", "<i class='glyph-icon flaticon-next-1'></i>"],
      navContainer: '#ProjectNav',
      responsive: {
        0: {
          items: 1
        },
        590: {
          items: 2
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        },
        1199: {
          items: 4
        },
        1440: {
          items: 4
        },
        1760: {
          items: 5
        }
      }
    })
  }

  // Portfolio Carousel2
  if ($('.portfolio-carousel2').length) {
    $('.portfolio-carousel2').owlCarousel({
      navigation: false,
      pagination: true,
      smartSpeed: 500,
      autoplayTimeout: 8000,
      stopOnHover: true,
      dots: false,
      nav: true,
      loop: true,
      autoplay: true,
      autoPlay: true,
      items: 5,
      margin: 30,
      navText: ["<i class='glyph-icon flaticon-next-1'></i>", "<i class='glyph-icon flaticon-next-1'></i>"],
      navContainer: '#ProjectNav',
      responsive: {
        0: {
          items: 1
        },
        420: {
          items: 2
        },
        590: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 3
        },
        1199: {
          items: 4
        },
        1440: {
          items: 4
        },
        1760: {
          items: 5
        }
      }
    })
  }

  // Pie Chart
  if ($('.chart').length) {
    $('.chart').easyPieChart({
      size: 100,
      barColor: "#ff2b56",
      scaleLength: 0,
      lineWidth: 10,
      trackColor: "#e1e3e5",
      lineCap: "circle",
      animate: 2000,
    });
  }

  /*-------------------------------------
      Fetuered Videos popup
  -------------------------------------*/
  var popupvideos = $('.popup-videos');
  if (popupvideos.length) {
    $('.popup-videos').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
    });
  }

  // image popup
  var imaggepoppup = $('.image-popup');
  if (imaggepoppup.length) {
    $('.image-popup').magnificPopup({
      type: 'image',
      callbacks: {
        beforeOpen: function() {
          this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated pulse');
        }
      },
      gallery: {
        enabled: true
      }
    });
  }

  /*-------------------------------------
      youtube popup js
  -------------------------------------*/
  $.fn.YouTubePopUp = function(options) {
    var YouTubePopUpOptions = $.extend({
      autoplay: 1
    }, options);
    $(this).on('click', function(e) {
      var youtubeLink = $(this).attr("href");
      if (youtubeLink.match(/(youtube.com)/)) {
        var split_c = "v=";
        var split_n = 1;
      }
      if (youtubeLink.match(/(youtu.be)/) || youtubeLink.match(/(vimeo.com\/)+[0-9]/)) {
        var split_c = "/";
        var split_n = 3;
      }
      var getYouTubeVideoID = youtubeLink.split(split_c)[split_n];

      var cleanVideoID = getYouTubeVideoID.replace(/(&)+(.*)/, "");

      if (youtubeLink.match(/(youtu.be)/) || youtubeLink.match(/(youtube.com)/)) {
        var videoEmbedLink = "https://www.youtube.com/embed/" + cleanVideoID + "?autoplay=" + YouTubePopUpOptions.autoplay + "";
      }
      if (youtubeLink.match(/(vimeo.com\/)+[0-9]/) || youtubeLink.match(/(vimeo.com\/)+[a-zA-Z]/)) {
        var videoEmbedLink = "https://player.vimeo.com/video/" + cleanVideoID + "?autoplay=" + YouTubePopUpOptions.autoplay + "";
      }
      $("body").append('<div class="YouTubePopUp-Wrap YouTubePopUp-animation"><div class="YouTubePopUp-Content"><span class="YouTubePopUp-Close"></span><iframe src="' + videoEmbedLink + '" allowfullscreen></iframe></div></div>');

      if ($('.YouTubePopUp-Wrap').hasClass('YouTubePopUp-animation')) {
        setTimeout(function() {
          $('.YouTubePopUp-Wrap').removeClass("YouTubePopUp-animation");
        }, 600);
      }
      $(".YouTubePopUp-Wrap, .YouTubePopUp-Close").on('click', function() {
        $(".YouTubePopUp-Wrap").addClass("YouTubePopUp-Hide").delay(515).queue(function() {
          $(this).remove();
        });
      });
      e.preventDefault();
    });
  };

  // wow init
  new WOW().init();

  // image loaded portfolio init
  $('.grid').imagesLoaded(function() {
    $('.portfolio-filter').on('click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-item',
      }
    });
  });

  // YouTubePopUp
  var popupvideo = $('.popup-video');
  if (popupvideo.length) {
    $(".popup-video").YouTubePopUp();
  }

  // portfolio Filter
  var filterbutton = $('.portfolio-filter button');
  if (filterbutton.length) {
    $('.portfolio-filter button').on('click', function(event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
  }

  //Accordion one Item always open
  var whychoose = $('.panel-group');
  if (whychoose.length) {
    $('.panel-title a').on('click', function(e) {
      $('.panel .panel-collapse').removeClass('show')
      $('.panel-title a').removeClass('expanded')
      $(this).toggleClass('expanded');
      if ($(this).parents('.panel').children('.panel-collapse').hasClass('expanded')) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  }

  //One page menu js
  if ($('.nav-onepage').length) {
    $('.nav-onepage ul li:first-child').addClass('active');
    var aaaa = jQuery('.nav-onepage ul:not(.sub-menu) > li > a');
    aaaa.off().on('click', function(e) {
      e.stopPropagation();
      var element = jQuery(this);
      var url = element.attr('href');
      if (url !== '#' && url.charAt(0) === '#') {
        aaaa.parent().removeClass('active');
        element.parent().addClass('active');
        $('html, body').animate({
          scrollTop: $(url).offset().top - 100
        }, 1000);
      }
      return false;
    });

    var navChildren = $(".nav-onepage ul li").children("a");
    var aArray = [];
    for (var i = 0; i < navChildren.length; i++) {
      var aChild = navChildren[i];
      var ahref = $(aChild).attr('href');
      aArray.push(ahref);
    }

    $(window).on("scroll", function() {
      var windowPos = $(window).scrollTop();
      var windowHeight = $(window).height();
      var docHeight = $(document).height();
      for (var i = 0; i < aArray.length; i++) {
        var theID = aArray[i];
        var secPosition = $(theID).offset().top;
        secPosition = secPosition - 135;
        var divHeight = $(theID).height();
        divHeight = divHeight + 90;
        if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
          $(".nav-onepage ul a[href='" + theID + "']").parent().addClass("active");
        } else {
          $(".nav-onepage ul a[href='" + theID + "']").parent().removeClass("active");
        }
      }
    });
  }

  // Counter Up 
  var emcounter = $('.em-counter');
  if (emcounter.length) {
    $('.em-counter').counterUp({
      delay: 20,
      time: 1500
    });
  }

  // Skill Bar Js
  $.fn.skillBars = function(options) {
    var settings = $.extend({
      from: 0, // number start
      to: false, // number end
      speed: 1000, // how long it should take to count between the target numbers
      interval: 100, // how often the element should be updated
      decimals: 0, // the number of decimal places to show
      onUpdate: null, // callback method for every time the element is updated,
      onComplete: null, // callback method for when the element finishes updating
      classes: {
        skillBarBar: '.skillbar-bar',
        skillBarPercent: '.skill-bar-percent',
      }
    }, options);

    return this.each(function() {
      var obj = $(this),
        to = (settings.to != false) ? settings.to : parseInt(obj.attr('data-percent'));
      if (to > 100) {
        to = 100;
      };
      var from = settings.from,
        loops = Math.ceil(settings.speed / settings.interval),
        increment = (to - from) / loops,
        loopCount = 0,
        interval = setInterval(updateValue, settings.interval);

      obj.find(settings.classes.skillBarBar).animate({
        width: parseInt(obj.attr('data-percent')) + '%'
      }, settings.speed);

      function updateValue() {
        from += increment;
        loopCount++;
        $(obj).find(settings.classes.skillBarPercent).text(from.toFixed(settings.decimals) + '%');

        if (typeof(settings.onUpdate) == 'function') {
          settings.onUpdate.call(obj, from);
        }

        if (loopCount >= loops) {
          clearInterval(interval);
          from = to;

          if (typeof(settings.onComplete) == 'function') {
            settings.onComplete.call(obj, from);
          }
        }
      }
    });
  };

  //Skill bar
  var skillbarid = $('.skillbar');
  if (skillbarid.length) {
    $('.skillbar').skillBars({
      from: 0,
      speed: 4000,
      interval: 100,
      decimals: 0,
    });
  }

  //Images Zoom
  var zoom_03_id = $('#zoom_03');
  if (zoom_03_id.length) {
    $("#zoom_03").elevateZoom({
      gallery: 'gal1',
      cursor: 'pointer',
      galleryActiveClass: 'active',
      imageCrossfade: true,
      loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
    });

    $("#zoom_03").on("click", function(e) {
      var ez = $('#zoom_03').data('elevateZoom');
      $.fancybox(ez.getGalleryList());
      return false;
    });
  }

  // scrollTop init
  var totop = $('#scrollUp');
  win.on('scroll', function() {
    if (win.scrollTop() > 150) {
      totop.fadeIn();
    } else {
      totop.fadeOut();
    }
  });

  totop.on('click', function() {
    $("html,body").animate({
      scrollTop: 0
    }, 500)
  });


  /*-------------------------------------
      Section Amimation Start
  -------------------------------------*/

  var window_height = $(window).height() - 1;

  function add_class_for_animation(select_class, active_class) {
    var all_classes = $(select_class);
    if (all_classes) {
      $(window).scroll(function() {
        all_classes.each(function(index, eachElm) {
          var fromTop = $(document).scrollTop() + window_height;
          var elementOffset = $(eachElm).offset().top;
          if (elementOffset < fromTop) {
            if (!$(eachElm).hasClass(active_class)) {
              $(eachElm).addClass(active_class)
            }
          }
        });
      });
    }
  }
  add_class_for_animation('.has-animation', 'active-animation');

  $(window).on('load', function() {
    window.setTimeout(function() {
      $(".banner-shape-inner").delay(1500).addClass('shape-loaded');
    }, 5);
  });

  //animation on mouse enter
  $('.animted-bg-wrap').on('mouseenter', function(e) {
    var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
    if ($(this).find('.animted-bg-wrap .animted-bg')) {
      $('.animted-bg-wrap .animted-bg').css({
        top: relY,
        left: relX,
      });
    }
  });

  //animation on mouse Out
  $('.animted-bg-wrap').on('mouseout', function(e) {
    var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
    if ($(this).find('.animted-bg-wrap .animted-bg')) {
      $('.animted-bg-wrap .animted-bg').css({
        top: relY,
        left: relX,
      });
    }
  });

  //End Section Amimation


  // Google Map
  if ($('#g-map').length) {
    var mapProp = {
      center: new google.maps.LatLng(40.674, -73.945),
      zoom: 5,
      styles: [{
          elementType: 'geometry',
          stylers: [{
            color: '#f2f2f2'
          }]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [{
            color: '#f2f2f2'
          }]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#444444'
          }]
        },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#444'
          }]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#d59563'
          }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{
            color: '#46bcec'
          }]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#6b9a76'
          }]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{
            color: '#ff0000'
          }]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{
            color: '#212a37'
          }]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#9ca5b3'
          }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{
            color: '#ffffff'
          }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{
            color: '#ffffff'
          }]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#f3d19c'
          }]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{
            color: '#2f3948'
          }]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#d59563'
          }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{
            color: '#46bcec'
          }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#515c6d'
          }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{
            color: '#46bcec'
          }]
        }
      ]
    };
    var map = new google.maps.Map(document.getElementById("g-map"), mapProp);
  }


  /*-------------------------------------
      Offcanvas home 6
  -------------------------------------*/
  $(window).on('load', function() {
    axil_paprload_scripts();
  });

  function axil_paprload_scripts() {
    // End Off-canvas
    var sideNav = $('.hamburgernav-nav');
    var _html = $('html');

    $(document).on('click', '#hamburgernav-nav-toggler', function(e) {
      e.preventDefault();
      sideNav.addClass('opened');
      _html.addClass('hamburgernav-nav-opened');

      setTimeout(function() {
        $('.hamburgernav-nav-opened .hamburgernav-navigation').children('li').each(function(index) {
          $(this).delay(100 * index)
            .animate({
              opacity: "1",
              left: '0'
            }, 100);
        });
      }, 500);
    });

    $(document).on('click', '#close-sidenav', function(e) {
      if (!$('.hamburgernav-nav, .hamburgernav-nav :not(".close-sidenav")').is(e.target) && !$('.hamburgernav-nav-toggler, .hamburgernav-nav-toggler ').is(e.target)) {
        sideNav.removeClass('opened');
        _html.removeClass('hamburgernav-nav-opened');
        $('.hamburgernav-navigation').children('li').removeAttr('style');
      }
    });
  }

  $(document).on('click', '.tact-left-sidebar-wrp .offcanvas-cpt-menu a[href^="#"]', function(event) {
    event.preventDefault();
  });

  /*-------------------------------------
        Home page main Slider
  -------------------------------------*/

  var owl = $('.slider-carousel');

  $('#ensign-nivoslider-1').nivoSlider({
    effect: 'boxRainGrowReverse', // Specify sets like: 'sliceDownLeft sliceUp sliceUpLeft sliceUpDown sliceUpDownLeft fold fade random slideInRight slideInLeft boxRandom boxRain boxRainReverse boxRainGrow boxRainGrowReverse'
    slices: 15, // For slice animations
    boxCols: 8, // For box animations
    boxRows: 4, // For box animations
    animSpeed: 500, // Slide transition speed
    pauseTime: 8000, // How long each slide will show
    startSlide: 0, // Set starting Slide (0 index)
    directionNav: true, // Next & Prev navigation
    controlNav: false, // 1,2,3... navigation
    controlNavThumbs: false, // Use thumbnails for Control Nav
    pauseOnHover: false, // Stop animation while hovering
    manualAdvance: true, // Force manual transitions
    prevText: '<i class="fa fa-angle-left"></i>', // Prev directionNav text
    nextText: '<i class="fa fa-angle-right"></i>', // Next directionNav text
    randomStart: false, // Start on a random slide
    slideshowEnd: function() {}, // Triggers after all slides have been shown
    lastSlide: function() {}, // Triggers when last slide is shown
    afterLoad: function() {} // Triggers when slider has loaded
  });

  $('#ensign-nivoslider-2').nivoSlider({
    effect: 'boxRainGrowReverse', // Specify sets like: 'sliceDownLeft sliceUp sliceUpLeft sliceUpDown sliceUpDownLeft fold fade random slideInRight slideInLeft boxRandom boxRain boxRainReverse boxRainGrow boxRainGrowReverse'
    slices: 15, // For slice animations
    boxCols: 8, // For box animations
    boxRows: 4, // For box animations
    animSpeed: 500, // Slide transition speed
    pauseTime: 8000, // How long each slide will show
    startSlide: 0, // Set starting Slide (0 index)
    directionNav: true, // Next & Prev navigation
    controlNav: false, // 1,2,3... navigation
    controlNavThumbs: false, // Use thumbnails for Control Nav
    pauseOnHover: false, // Stop animation while hovering
    manualAdvance: true, // Force manual transitions
    prevText: '<i class="fa fa-angle-left"></i>', // Prev directionNav text
    nextText: '<i class="fa fa-angle-right"></i>', // Next directionNav text
    randomStart: false, // Start on a random slide
    slideshowEnd: function() {}, // Triggers after all slides have been shown
    lastSlide: function() {}, // Triggers when last slide is shown
    afterLoad: function() {} // Triggers when slider has loaded
  });

  //preloader
  $(window).on('load', function() {
    $("#loader-wrapper").delay(2000).fadeOut(500);
    $(".spinner").on('click', function() {
      $("#loader-wrapper").fadeOut(500);
    })
  });


  // add animate.css class(es) to the elements to be animated
  function setAnimation(_elem, _InOut) {
    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    _elem.each(function() {
      var $elem = $(this);
      var $animationType = 'animated ' + $elem.data('animation-' + _InOut);
      $elem.addClass($animationType).one(animationEndEvent, function() {
        $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
      });
    });
  }

  // Fired before current slide change
  owl.on('change.owl.carousel', function(event) {
    var $currentItem = $('.owl-item', owl).eq(event.item.index);
    var $elemsToanim = $currentItem.find("[data-animation-out]");
    setAnimation($elemsToanim, 'out');
  });

  // Fired after current slide has been changed
  owl.on('changed.owl.carousel', function(event) {
    var $currentItem = $('.owl-item', owl).eq(event.item.index);
    var $elemsToanim = $currentItem.find("[data-animation-in]");
    setAnimation($elemsToanim, 'in');
  })

})(jQuery);


//Slider animated images
$(function() {

  var $owl = $('.slider-carousel'),
    effect = getAnimationName(),
    outIndex,
    isDragged = false;

  $owl.owlCarousel({
    margin: 0,
    navSpeed: 500,
    nav: true,
    items: 2,
    animateIn: 'fade',
    animateOut: 'fade'
  });

  $owl.on('change.owl.carousel', function(event) {
    outIndex = event.item.index;
  });

  $owl.on('changed.owl.carousel', function(event) {
    var inIndex = event.item.index,
      dir = outIndex <= inIndex ? 'Next' : 'Prev';

    var animation = {
      moveIn: {
        item: $('.owl-item', $owl).eq(inIndex),
        effect: effect + 'In' + dir
      },
      moveOut: {
        item: $('.owl-item', $owl).eq(outIndex),
        effect: effect + 'Out' + dir
      },

      run: function(type) {
        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          animationObj = this[type],
          inOut = type == 'moveIn' ? 'in' : 'out',
          animationClass = 'animated owl-animated-' + inOut + ' ' + animationObj.effect,
          $nav = $owl.find('.owl-prev, .owl-next, .owl-dot, .owl-stage');

        $nav.css('pointerEvents', 'none');

        animationObj.item.stop().addClass(animationClass).one(animationEndEvent, function() {
          // remove class at the end of the animations
          animationObj.item.removeClass(animationClass);
          $nav.css('pointerEvents', 'auto');
        });
      }
    };

    if (!isDragged) {
      animation.run('moveOut');
      animation.run('moveIn');
    }
  });

  $owl.on('drag.owl.carousel', function(event) {
    isDragged = true;
  });

  $owl.on('dragged.owl.carousel', function(event) {
    isDragged = false;
  });

  /**
   * Get Animation Name from the class 'owl-carousel',
   * animation name begins with fx...
   */
  function getAnimationName() {
    var re = /fx[a-zA-Z0-9\-_]+/i,
      matches = re.exec($owl.attr('class'));

    return matches !== null ? matches[0] : matches;
  }


  /**
   * For Demo (Selectbox)
   * Change select options with animation name
   */
  $('#fxselect').on('change', function(e) {
    var $owlCarousel = $('.owl-carousel'),
      animationName = getAnimationName();
    effect = $(this).find('option:selected').val();

    //remove old root class
    if (animationName !== null) {
      $owl.removeClass(animationName);
    }

    //add new root class
    $owlCarousel.addClass(effect);
  });
});

//Left Right Sidebar Menu appear on click
$(function() {
  var sidebarClickOnMenuItemDesktop;
  if ($(window).width() > 120 && !$('body').hasClass('mob-main-menu') || $(window).width() > 1024 && $('body').hasClass('mob-main-menu')) {

    $('.fixed-side-menu .menu-item-has-children a').addClass('hide-drop');

    sidebarClickOnMenuItemDesktop = function() {
      ('.full-sidebar-menu .menu-item-has-children a.hide-drop').preventDefault();
      if ($(this).parent().hasClass('menu-item-has-children')) {
        if ($(this).hasClass('hide-drop')) {
          if ($(this).closest('.sub-menu').length) {
            $(this).removeClass('hide-drop').next('.sub-menu').slideDown(400);
            $(this).parent().siblings().find('.sub-menu').slideUp(400);
          } else {
            $('.menu-item-has-children a').addClass('hide-drop').next('.sub-menu').hide(100);
            $(this).removeClass('hide-drop').next('.sub-menu').slideToggle(400);
          }

        } else {
          $(this).addClass('hide-drop').next('.sub-menu').hide(100).find('.menu-item-has-children a').addClass('hide-drop').next('.sub-menu').hide(100);
        }

      }
    }

    $('.fixed-side-menu .menu-item a').on('click', sidebarClickOnMenuItemDesktop);

  } else if ($(window).width() < 992 && !$('body').hasClass('mob-main-menu') || $(window).width() < 1024 && $('body').hasClass('mob-main-menu')) {
    $('.menu-item-has-children a').removeClass('hide-drop');
  }

  $(document).on('click', function(e) {
    e.stopPropagation();
    if (!$(e.target).closest(".fixed-side-menu .full-sidebar-menu .menu").length) {
      if (($(window).width() > 1024)) {
        $('.fixed-side-menu .menu-item > a').addClass('hide-drop').next().slideUp();
      }
    }
  });

  function isTouchDevice() {
    return 'ontouchstart' in document.documentElement;
  }

  $('.small-mob-nav').on('click', function() {
    if ($(window).width() > 1024) {
      $(this).toggleClass('active');
      if ($('#full-sidebar-menu').hasClass('open')) {
        $('#full-sidebar-menu').toggleClass('open');
        setTimeout(function() {
          $('#full-sidebar-menu').animate({
            'width': 'toggle'
          }, 500);
        }, 800);
      } else {
        $('#full-sidebar-menu').animate({
          'width': 'toggle'
        }, 500);
        setTimeout(function() {
          $('#full-sidebar-menu').toggleClass('open');
        }, 400);
      }
      return false;
    } else {
      $('html').addClass('no-scroll sidebar-open').height(window.innerHeight + 'px');
      if ($('#wpadminbar').length) {
        $('.sidebar-open #full-sidebar-menu').css('top', '46px');
      } else {
        $('.sidebar-open #full-sidebar-menu').css('top', '0');
      }
    }
  });

  $('.small-mob-nav-close').on('click', function() {
    $('html').removeClass('no-scroll sidebar-open').height('auto');
  });

  // ASIDE MENU NAVIGATION
  $('.fixed-side-nav').on('click', function() {
    $('.fixed-side-menu').toggleClass('active-menu');
    $('.full-sidebar-menu').toggleClass('active-menu');
    return false;
  });
  $('.main-wrapper:not(.unit) .menu-item-has-children > a').on('click', function(e) {
    e.preventDefault();
  });

});