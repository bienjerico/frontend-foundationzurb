/*
	Author: Bien Jerico Cueto
	File name: app.js
	Description: Initialize the main Javascript functionality of Frontend Foundation Zurb Website
	Dependencies: jQuery
*/

var FRONTEND = FRONTEND || {};

(function($){

	FRONTEND.loadPage = {
		init: function(){
			console.log("success");
      this.initSuccess();
		},
    initSuccess: function(){
      $('.row').css('color','green');
    }
	}


	// this will initialize the functions
	$(function(){
		// this will initialize foundation js dependencies
		$(document).foundation();
		// this will call the loadPage.init function
		FRONTEND.loadPage.init();
	});

})(jQuery);
