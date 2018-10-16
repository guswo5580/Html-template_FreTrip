(function(){
	var current = 0;
	var max = 0;
	var container;
	var interval;
	
	function events (){
		jQuery("button.prev").on("click", prev);
		jQuery("button.next").on("click", next);
		
		jQuery(window).on("keydown", keydown);
	}
	function init(){
		container = jQuery(".slide ul");
		max = container.children().length;
		events();
		interval = setInterval(next,4000);
	}

	function animate(){
		var moveX = current * 600;
		TweenMax.to(container, 0.8, {marginLeft: -moveX, ease:Expo.easeOut});
		
		// stack에 쌓이는 것을 방지
		clearInterval(interval);
		interval = setInterval(next,4000);
		
	}
	
	function prev(e){
		current--;
		if(current < 0)
			current = max-1;

		animate();
	}
	function next(e){
		current++;
		if(current > max-1)
			current = 0;

		animate();
	}
	// keydown의 which값으로 구분
	function keydown(e) {
		// console.log(e);
		if(e.which == 39){
			// right
			next();
		}
		else if(e.which == 37){
			// left
			prev();
		}
	}
	jQuery(document).ready(init);
})();