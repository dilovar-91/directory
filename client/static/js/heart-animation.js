$( document ).ready(function() {
var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
   var el = document.querySelector('.button'),
	// mo.js timeline obj
	timeline = new mojs.Timeline(),

	// tweens for the animation:

	// burst animation
	tween1 = new mojs.Burst({
		parent: el,
  radius:   { 0: 100 },
  angle:    { 0: 45 },
  y: -10,
  count:    10,
   radius:       100,
  children: {
    shape:        'circle',
    radius:       30,
    fill:         [ 'red', 'white' ],
    strokeWidth:  15,
    duration:     500,
  }
	});


	tween2 = new mojs.Tween({
		duration : 900,
		onUpdate: function(progress) {
			var scaleProgress = scaleCurve(progress);
			el.style.WebkitTransform = el.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
		}
	});
  		tween3 = new mojs.Burst({
		parent: el,
  radius:   { 0: 100 },
  angle:    { 0: -45 },
  y: -10,
  count:    10,
   radius:       125,
  children: {
    shape:        'circle',
    radius:       30,
    fill:         [ 'white', 'red' ],
    strokeWidth:  15,
    duration:     400,
  }
	});

// add tweens to timeline:
timeline.add(tween1, tween2, tween3);


// when clicking the button start the timeline/animation:
$( ".button" ).click(function() {
	if ($(this).hasClass('active')){
		$(this).removeClass('active');
	}else{
  timeline.play();
  $(this).addClass('active');
	}
});


});