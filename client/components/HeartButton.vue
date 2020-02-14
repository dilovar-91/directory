<template>
    <div id='heart' class='button' @click="setLike"></div>
</template>
<script>
export default {
    props: {    
        id: {
        type: Number,
        required: false,
        default: 0
        },               
        
    },
    methods: {
        setLike(){
           //store.dispatch("review/fetch_item", {id}) 
   var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
   var el = this.$el.querySelector('.button'),
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
			this.$el.style.WebkitTransform = this.$el.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
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
        }

    }
    

}
</script>
<style scoped>

.button{
	width: 50px;
	height: 50px;
  top:50%;
  position: fixed;
	left: 50%;
	margin-top: -45px;
	margin-left: -50px;
	border-radius: 5px;
	background: none;
	cursor: pointer;
	transition: background 0.5s ease;
}
.active#heart:before,.active#heart:after{
	background: red !important;
}
#heart {
    width: 100px;
    height: 90px;
    transition: background 0.5s ease;
}
#heart:before,
#heart:after {
	transition: background 0.5s ease;
    position: absolute;
    content: "";
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: dimgrey;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
}
#heart:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin :100% 100%;
}
</style>