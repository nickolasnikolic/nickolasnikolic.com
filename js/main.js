$(document).ready(function(){
/*
    enquire.register("screen and (min-width:768px)", {

        // OPTIONAL
        // If supplied, triggered when a media query matches.
        match : function() {
*/
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
            
            //decrease the navs tone to 0 when scrolled
            $( 'nav' )
                .attr( 'data-top', 'color: rgb( 15, 15, 15 ); background-color: rgb( 255, 255, 255 ); height: 3em;' )
                .attr( 'data--100-top', 'color: rgb( 255, 255, 255 ); background-color: rgb( 0, 0, 0 ); height: 2em;' );
	
			//spread headline text shadow upon scroll
			$( '.intro-message > h1' )
				.attr( 'data-top', 'text-shadow: black 2px 2px 15px;' )
				.attr( 'data--300-top', 'text-shadow: black 2px 2px 510px;' );
    
            //next apply standard animations to them based upon whether they are scrolled to the top or bottom
            $( '.intro-message' )
                .attr( 'data-top', 'transform: translate( 0px, 0px );' )
                .attr( 'data--300-top', 'transform: translate( 0px, -300px );' );

            //body background will fade with bg image, first by becoming like in tone
            $( 'body' )
                .attr( 'data-0', 'background-color: rgb( 0, 0, 0 );' )
                .attr( 'data-100', 'background-color: rgb( 255, 255, 255 );' );

            //then simply revoking opacity
            $( '.sheer' )
                .attr( 'data-0', 'opacity: 0.0;' )
                .attr( 'data-100', 'opacity: 1.0;' );

            //modify visibility sharply after text completely visible
            $( '.lifestory, .content-section-b' )
                .attr( 'data-50-top', 'opacity: 1.0;' )
                .attr( 'data-center-center', 'opacity: 0.8;' );
                //.attr( 'data-bottom-bottom', 'opacity: 0.0;' );

            //rolling light-up reader effect
            $( '.lifestory p, .lifestory h2, .lifestory h2, .services p, .services h2, .services li' )
                .attr( 'data-100-top', 'color: rgba( 255, 255, 255, 1.0 );' )
                .attr( 'data-center-center', 'color: rgba( 200, 200, 115, 1.0 );' );
                //.attr( 'data--500-bottom', 'color: rgba( 5, 5, 5, 1.0 );' );


            //for enders, start skrollr
            skrollr.init( {
                smoothScrollingDuration: 1750,
                forceHeight: false
            } );
/*
        },      

        // OPTIONAL
        // If supplied, triggered when the media query transitions 
        // *from a matched state to an unmatched state*.
        unmatch : function() {}

    });
*/
});

