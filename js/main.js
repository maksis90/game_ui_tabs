'use strict';

(function($){

	// Tabs

	$(document).ready(function() {
		// Code
		// Tabs
        $( function() {
            $( "#tabs" ).tabs({
                //collapsible: true
            });
        });
	});

	// Add and remove class active

	$('#tabs li a').on('click', function(){
		$('li a.active').removeClass('active');
		$(this).addClass('active');
	});

	// Modal window

    $( function() {
        $( "#dialog" ).dialog({
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });

        $( "#opener" ).on( "click", function() {
            $( "#dialog" ).dialog( "open" );
        });
    } );

    //	Accordion

    $( function() {
        $( "#accordion" ).accordion({
        collapsible: true
        });
    } );

})(jQuery);
