var name;
var price;
var contact;
var category;
var description;
var platform;
var applink;



$("#entry_0").hide();
$("#entry_1").hide();

$("#app").click(function()
{
    $("#entry_1").hide();
    $("#entry_0").show();

});

$("#game").click(function(){
    $("#entry_0").hide();
    $("#entry_1").show();


});

$('.ripple').on('mousedown', function(event)
{
    

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
  
  applink = $("#applink").val();
  name = $("#name").val();
  contact = $("#contact").val();
  price =  $("#price").val();
  platform = $("#entry_2").val();
  description = $("#optionalinfo").val();
  
    if($('#app').is(':checked'))
          category = $("#entry_0").val();
    else if ($('#game').is(':checked'))  
          category = $("#entry_1").val();
    else 
          category = "Choose a category.";


  if(category == 'Choose a category.' || price == ''|| contact == '' || name == '' || description == '' || platform == ''  || applink == '' || applink.substring(0, 7) != 'http://')
  {
      if( category == "Choose a category.")
          alert("You haven't chosen a category for your app!");
     else if (applink.substring(0, 7) != "http://")
          alert("App link doesn't start with 'http://'!");
      else
          alert("One or more field has been left blank.");
  }
  else{
      var toopen = "#Developer App Wiki Application\n-------------\nThe text below is for moderator use. Please don't alter it.\n##Category: " + category + "\n##Formatted table data:\n`[" + name + "](" + applink + ")  |" + price +"  |" + platform + "   |" + description +" | " + contact + "`\n[Click here to go to the wiki page](http://www.reddit.com/r/Android/wiki/edit/apps)";
      var sendto = "/r/Android";
      window.open("http://www.reddit.com/message/compose?to=" + encodeURIComponent(sendto) + "&subject=Developer%20Wiki%20App%20Submission&message=" + encodeURIComponent(toopen));
  
    }
  
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
