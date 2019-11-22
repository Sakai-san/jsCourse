$(function(){
	var wells = $(".well.well-sm");

	$(wells).each(function(){
		$(this).hide();
	});

	var cssAnimationIn 	= ["lightSpeedIn","bounceIn", "bounceInLeft", "bounceInUp", "bounceInDown", "rotateIn", "rubberBand", "jello", "rollIn", "zoomIn"];
	var cssAnimationOut = ["lightSpeedOut", "rotateOut", "zoomOutUp", "rollOut", "fadeOutUp", "bounceOut", "fadeOutDown", "hinge"];

	var cssAnim = _.shuffle( cssAnimationIn );


	var wells_number = $(wells).length;
	for(var i = 0; i < wells_number ; i++) {
		setTimeout(
			( function(arg1) {
				return function() {
					var animated_classes = 'animated ' + cssAnim[_.random(0,cssAnim.length-1)];
					$(wells[arg1]).show().addClass( animated_classes );
				};
			} ) ( i ),
			100 + i*250
		);
	}


	// for the chapter's
	var linksbox 	= $('.links-box');
	var menuItems	= $(linksbox).children();
	var nbItems 	= menuItems.length;
	var median  	= nbItems % 2 == 0  ? nbItems / 2 : Math.ceil( nbItems / 2.0 );

	var head = menuItems.slice( 0,  median );
	var tail = menuItems.slice( median,  nbItems);
	var headLength = head.length;
	var tailLength = tail.length;


	for(var i = 0; i < headLength ; i++) {
		setTimeout(
			( function(arg1) {
				return function() {
					$(head[arg1]).show().addClass('animated bounceInRight');
				};
			} ) ( i ),
			1000 + i*250
		);
	}

	for(var i = 0; i < tailLength ; i++) {
		setTimeout(
			( function(arg1) {
				return function() {
					$(tail[arg1]).show().addClass('animated bounceInDown');
				};
			} ) ( i ),
			1000 +(headLength +3)*250 +i*250
		);
	}

	//  (a b )
	// 	(c d )
	// in css = [a, c, b, d]
	var generate_css_matrix = function( css_vecteor ){
		return {
				'transition': 'transform 1s 0.1s ease-out, top 1s ease-out, margin 1s 1s ease-out, left 1s 1s ease-out',
				'position':'relative',
				'z-index':101,
				'transform-origin': '0 100%',
				'transform': 'matrix('+css_vecteor[0]+','+css_vecteor[2]+','+css_vecteor[1]+','+css_vecteor[3]+ ', 0, 0)'
			};
	};

	/* linear application set by the user */
	$("#start_lin_app").on("click", function(){
		var input_values = _.reduce($(".custom_application td"), function(memo, item){
			return memo.concat( $(item).find("input").val() );}, []);
		console.log( input_values );
		var css = generate_css_matrix(input_values);
		$("#figure_9_3 > img").css(css);
	});

	$("#reset_lin_app").on("click", function(){
		var transform = [1,0,0,1];
		var css = generate_css_matrix(transform);
		$("#figure_9_3 > img").css(css);
	});
});
