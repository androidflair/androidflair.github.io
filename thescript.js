var name;
var proof;
var flairtext;
var category;
 

$('.ripple').on('mousedown', function(event) {
	event.preventDefault();

	$(this).append('<div class="rippleEffect"/>');
  
	var $rippleEffect = $('.rippleEffect');

	var btnOffset = $(this).offset();
	var top = event.pageY - btnOffset.top;
	var left = event.pageX - btnOffset.left;
  
  $rippleEffect.css({
		'top': top - 19,
		'left': left - 19
  });
  
  $(this).addClass('pressed');
  
   name = $("#name").val();
   proof = $("#proof").val();
  flairtext =  $("#flairtext").val();
  category = $("#entry_0").val();
   $("#name").val(category);
  
  
  
  
  var toopen = "%23Flair%20Application%3A%0A%0A--------------%0A%0A*Company%20Name%3A*%0A%0A%3E" + name + "%0A%0A*Requested%20Flair%20Text%3A*%0A%0A%3E" + flairtext + "%0A%0A*Flair%20Category%3A*%0A%0A%3E" + category + "%0A%0A*Proof%3A*%0A%0A%3E" + proof + "%0A%0A";
  
  window.open("http://www.reddit.com/message/compose?to=%2Fr%2FAndroid&message=" + toopen);
  
  
  
});

$('.ripple').on('mouseup, mouseout', function() {
	var $rippleEffect = $('.rippleEffect');
	$rippleEffect.css({
		'opacity' : 0,
		'transition' : 'opacity 1s linear'
	});
	setTimeout(function(){
		$rippleEffect.remove();
     $('.ripple').removeClass('pressed');
	}, 600);
});