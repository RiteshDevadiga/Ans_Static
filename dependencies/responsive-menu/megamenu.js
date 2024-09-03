$(document).ready(function () {
	// Strict Mode
	"use strict";

	//Defines variables	
	var arrow_up = '<i class="fa fa-minus" aria-hidden="true"></i>';
	var arrow_down = '<i class="fa fa-plus" aria-hidden="true"></i>';
	var arrow_span = '<span class="em-menu-parent">' + arrow_down + '</span>';
	var close_button = '<div class="sub-menu-close"><i class="fa fa-times" aria-hidden="true"></i>Close</div>';
	
	//Insert all arrow down span element
	$('.nav-menu .em-mega-menu').append(arrow_span);
	$('.nav-menu > .menu-item-has-children').append(arrow_span);
	$('.nav-menu > .menu-item-has-children .sub-menu > .menu-item-has-children').append(arrow_span);

	/*-----------------------------------------------------------------------------------*/
	/*	OPEN SUB MENU FUNCTION
	/*-----------------------------------------------------------------------------------*/
	$('span.em-menu-parent').on('click', function(e){
		e.preventDefault();
		
		var t = $(this);
		var menu = t.siblings('ul');	
		var parent = t.parent('li');
		var siblings = parent.siblings('li');
		var arrow_target = 'span.em-menu-parent';
		
		if (menu.hasClass('sub-menu')) { 
			var menu = t.siblings('ul.sub-menu'); 
		} else if(menu.hasClass('mega-menu')) {
			var menu = t.siblings('ul.mega-menu');
		}

		menu.slideToggle(); 
		menu.toggleClass('opened');
		
		if (menu.hasClass('opened')) {	
			t.html(arrow_up);		
		} else {
			t.html(arrow_down);
		}
	}); 
	
	/*-----------------------------------------------------------------------------------*/
	/*	CLOSE BUTTON
	/*-----------------------------------------------------------------------------------*/ 
	$('ul.nav-menu div.sub-menu-close').on('click', function(e){
	   e.preventDefault();
		  
	   var a = $(this).parent('ul');      
	   a.removeClass('visible');
	   a.siblings('span.em-menu-parent').html(arrow_down);
	}); 
	
	/*-----------------------------------------------------------------------------------*/
	/*	EFFECTS ON MENU TOGGLE
	/*-----------------------------------------------------------------------------------*/ 
	$('a.em-menu-toggle').on('click', function(e){
		e.preventDefault();	
		var menu_height = $('.mobile-menu .em-menu ul').height();
		
		if ($(this).hasClass('em-menu-toggle-open')) {		
			$(this).removeClass('em-menu-toggle-open').addClass('em-menu-toggle-close');
		} else {			
			$(this).removeClass('em-menu-toggle-close').addClass('em-menu-toggle-open');
		}
	});	
});