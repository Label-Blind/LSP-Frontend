$(document).ready(function () {
	// Owl Corousel
	// $('.home-slider').owlCarousel({
	// 	loop: true,
	// 	autoplay: true,
	// 	margin: 0,
	// 	// animateOut: 'fadeOut',
	// 	// animateIn: 'fadeIn',
	// 	nav: false,
	// 	autoplayHoverPause: false,
	// 	items: 1,
	// 	// navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
	// 	responsive: {
	// 		0: {
	// 			items: 1
	// 		},
	// 		600: {
	// 			items: 1
	// 		},
	// 		1000: {
	// 			items: 1
	// 		}
	// 	}
	// });

	// Scroll
	$(window).scroll(function () {
		var $w = $(this),
			st = $w.scrollTop(),
			navbar = $('.ftco_navbar'),
			sd = $('.js-scroll-wrap');

		if (st > 150) {
			if (!navbar.hasClass('scrolled')) {
				navbar.addClass('scrolled');
			}
		}
		if (st < 150) {
			if (navbar.hasClass('scrolled')) {
				navbar.removeClass('scrolled sleep');
			}
		}
		if (st > 350) {
			if (!navbar.hasClass('awake')) {
				navbar.addClass('awake');
			}

			if (sd.length > 0) {
				sd.addClass('sleep');
			}
		}
		if (st < 350) {
			if (navbar.hasClass('awake')) {
				navbar.removeClass('awake');
				navbar.addClass('sleep');
			}
			if (sd.length > 0) {
				sd.removeClass('sleep');
			}
		}
	});

	$('#section-counter, .hero-wrap, .ftco-counter, .ftco-causes').waypoint(function (direction) {
		if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
			var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
			$('.number').each(function () {
				var $this = $(this),
					num = $this.data('number');
				$this.animateNumber(
					{
						number: num,
						numberStep: comma_separator_number_step
					}, 7000
				);
			});
		}
	}, { offset: '95%' });


	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});
	// loader
	// setTimeout(function () {
	// 	if ($('#ftco-loader').length > 0) {
	// 		$('#ftco-loader').removeClass('show');
	// 	}
	// }, 1);
	// Scrollax
	// $.Scrollax();
	// Burger Menu
	$('body').on('click', '.js-fh5co-nav-toggle', function (event) {
		event.preventDefault();
		if ($('#ftco-nav').is(':visible')) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}
	});

	// $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	// 	event.preventDefault();

	// 	var href = $.attr(this, 'href');

	// 	$('html, body').animate({
	// 		scrollTop: $($.attr(this, 'href')).offset().top - 70
	// 	}, 500, function () {
	// 		// window.location.hash = href;
	// 	});
	// });

	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$('.js-fullheight').css('height', $(window).height());
	$(window).resize(function () {
		$('.js-fullheight').css('height', $(window).height());
	});

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		// timer;
		// timer = setTimeout(function(){
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});

	var i = 0;
	$('.ftco-animate').waypoint(function (direction) {
		if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
			i++;
			$(this.element).addClass('item-animate');
			setTimeout(function () {

				$('body .ftco-animate.item-animate').each(function (k) {
					var el = $(this);
					setTimeout(function () {
						var effect = el.data('animate-effect');
						if (effect === 'fadeIn') {
							el.addClass('fadeIn ftco-animated');
						} else if (effect === 'fadeInLeft') {
							el.addClass('fadeInLeft ftco-animated');
						} else if (effect === 'fadeInRight') {
							el.addClass('fadeInRight ftco-animated');
						} else {
							el.addClass('fadeInUp ftco-animated');
						}
						el.removeClass('item-animate');
					}, k * 50, 'easeInOutExpo');
				});
			}, 100);
		}
	}, { offset: '95%' });
});


$(function () {
	$("#sortable tbody").sortable({
		cursor: "move",
		placeholder: "sortable-placeholder",
		helper: function (e, tr) {
			var $originals = tr.children();
			var $helper = tr.clone();
			$helper.children().each(function (index) {
				// Set helper cell sizes to match the original sizes
				$(this).width($originals.eq(index).width());
			});
			return $helper;
		}
	}).disableSelection();
});

// $(function(){

//     var canvas=document.getElementById("canvas");
//     var ctx=canvas.getContext("2d");

//     var canvasOffset=$("#canvas").offset();
//     var offsetX=canvasOffset.left;
//     var offsetY=canvasOffset.top;

//     var startX;
//     var startY;
//     var isDown=false;


//     var pi2=Math.PI*2;
//     var resizerRadius=8;
//     var rr=resizerRadius*resizerRadius;
//     var draggingResizer={x:0,y:0};
//     var imageX=10;
//     var imageY=10;
//     var imageWidth,imageHeight,imageRight,imageBottom;
//     var draggingImage=false;
//     var startX;
//     var startY;



//     var img=new Image();
//     img.onload=function(){
//         imageWidth=img.width;
//         imageHeight=img.height;
//         imageRight=imageX+imageWidth;
//         imageBottom=imageY+imageHeight
//         draw(true,false);
//     }
//     img.src="/images/labels/label.jpg";


//     function draw(withAnchors,withBorders){

//         // clear the canvas
//         ctx.clearRect(0,0,canvas.width,canvas.height);

//         // draw the image
//         ctx.drawImage(img,0,0,img.width,img.height,imageX,imageY,imageWidth,imageHeight);

//         // optionally draw the draggable anchors
//         if(withAnchors){
//             drawDragAnchor(imageX,imageY);
//             drawDragAnchor(imageRight,imageY);
//             drawDragAnchor(imageRight,imageBottom);
//             drawDragAnchor(imageX,imageBottom);
//         }

//         // optionally draw the connecting anchor lines
//         if(withBorders){
//             ctx.beginPath();
//             ctx.moveTo(imageX,imageY);
//             ctx.lineTo(imageRight,imageY);
//             ctx.lineTo(imageRight,imageBottom);
//             ctx.lineTo(imageX,imageBottom);
//             ctx.closePath();
//             ctx.stroke();
//         }

//     }

//     function drawDragAnchor(x,y){
//         ctx.beginPath();
//         ctx.arc(x,y,resizerRadius,0,pi2,false);
//         ctx.closePath();
//         ctx.fill();
//     }

//     function anchorHitTest(x,y){

//         var dx,dy;

//         // top-left
//         dx=x-imageX;
//         dy=y-imageY;
//         if(dx*dx+dy*dy<=rr){ return(0); }
//         // top-right
//         dx=x-imageRight;
//         dy=y-imageY;
//         if(dx*dx+dy*dy<=rr){ return(1); }
//         // bottom-right
//         dx=x-imageRight;
//         dy=y-imageBottom;
//         if(dx*dx+dy*dy<=rr){ return(2); }
//         // bottom-left
//         dx=x-imageX;
//         dy=y-imageBottom;
//         if(dx*dx+dy*dy<=rr){ return(3); }
//         return(-1);

//     }


//     function hitImage(x,y){
//         return(x>imageX && x<imageX+imageWidth && y>imageY && y<imageY+imageHeight);
//     }


//     function handleMouseDown(e){
//       startX=parseInt(e.clientX-offsetX);
//       startY=parseInt(e.clientY-offsetY);
//       draggingResizer=anchorHitTest(startX,startY);
//       draggingImage= draggingResizer<0 && hitImage(startX,startY);
//     }

//     function handleMouseUp(e){
//       draggingResizer=-1;
//       draggingImage=false;
//       draw(true,false);
//     }

//     function handleMouseOut(e){
//       handleMouseUp(e);
//     }

//     function handleMouseMove(e){

//       if(draggingResizer>-1){

//           mouseX=parseInt(e.clientX-offsetX);
//           mouseY=parseInt(e.clientY-offsetY);

//           // resize the image
//           switch(draggingResizer){
//               case 0: //top-left
//                   imageX=mouseX;
//                   imageWidth=imageRight-mouseX;
//                   imageY=mouseY;
//                   imageHeight=imageBottom-mouseY;
//                   break;
//               case 1: //top-right
//                   imageY=mouseY;
//                   imageWidth=mouseX-imageX;
//                   imageHeight=imageBottom-mouseY;
//                   break;
//               case 2: //bottom-right
//                   imageWidth=mouseX-imageX;
//                   imageHeight=mouseY-imageY;
//                   break;
//               case 3: //bottom-left
//                   imageX=mouseX;
//                   imageWidth=imageRight-mouseX;
//                   imageHeight=mouseY-imageY;
//                   break;
//           }

//           // enforce minimum dimensions of 25x25
//           if(imageWidth<25){imageWidth=25;}
//           if(imageHeight<25){imageHeight=25;}

//           // set the image right and bottom
//           imageRight=imageX+imageWidth;
//           imageBottom=imageY+imageHeight;

//           // redraw the image with resizing anchors
//           draw(true,true);

//       }else if(draggingImage){

//           imageClick=false;

//           mouseX=parseInt(e.clientX-offsetX);
//           mouseY=parseInt(e.clientY-offsetY);

//           // move the image by the amount of the latest drag
//           var dx=mouseX-startX;
//           var dy=mouseY-startY;
//           imageX+=dx;
//           imageY+=dy;
//           imageRight+=dx;
//           imageBottom+=dy;
//           // reset the startXY for next time
//           startX=mouseX;
//           startY=mouseY;

//           // redraw the image with border
//           draw(false,true);

//       }


//     }


//     $("#canvas").mousedown(function(e){handleMouseDown(e);});
//     $("#canvas").mousemove(function(e){handleMouseMove(e);});
//     $("#canvas").mouseup(function(e){handleMouseUp(e);});
//     $("#canvas").mouseout(function(e){handleMouseOut(e);});
// });