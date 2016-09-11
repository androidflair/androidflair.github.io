var name;
var proof;
var flairtext;
var category;
var additionalinfo;
var uname;


$( document ).ready(function() {
   // alert("One or more required field has been left blank.");

$(".ripple").mousedown( function(event) {


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
  additionalinfo = $("#optionalinfo").val();
  uname = $("#uname").val();

  if(category == '' || flairtext == ''|| proof == '' || name.length == '' || uname == '')
  {
      alert("One or more required field has been left blank.");
  }
  else
  {
      if(additionalinfo == '')
          additionalinfo = 'None';
      
			var modmsg = "**For Moderators:**%0A%0A%20%5BClick%20here%20to%20go%20to%20flair%20page%5D%28http%3A%2F%2Fwww.reddit.com%2Fr%2Fandroid%2Fabout%2Fflair%3F%26name%3D" + uname + "%29";
      var toopen = "%23Flair%20Application%3A%0A%0A--------------%0A%0A**Company%20Name%3A**%0A%0A%3E" + name + "%0A%0A**Requested%20Flair%20Text%3A**%0A%0A%3E" + flairtext + "%0A%0A**Flair%20Category%3A**%0A%0A%3E" + category + "%0A%0A**Proof%3A**%0A%0A%3E" + proof + "%0A%0A**Additional%20Information**%0A%0A%3E" + encodeURIComponent(additionalinfo) +"%0A%0A" + modmsg;

      window.open("http://www.reddit.com/message/compose?to=%2Fr%2FAndroid&subject=Flair%20Application&message=" + toopen);

    }

});

function click()
{
          alert("One or more required field has been left blank.");
    
}
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
});
