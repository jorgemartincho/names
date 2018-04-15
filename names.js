$(document).ready(function(){
	$(function() {
	  $(".hideshow").click(function(args) {
		var showStuff = $(this).prop("checked");
		$(this).closest(".autohide").each(function() {
		  if (showStuff)
			$(this).addClass("checkhidden");
		  else
			$(this).removeClass("checkhidden");
		});
	  });
	});
});