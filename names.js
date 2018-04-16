$(document).ready(function() {
  $(function() {
    $(".hideshow").click(function(args) {
      var showStuff = $(this).prop("checked");
      $(this).closest(".autohide").each(function() {
        if (showStuff) {
          $(this).removeClass("checkhidden");
        } else {
          $(this).addClass("checkhidden");
          localStorage.setItem($(this).find('input').attr('id'), "checkhidden");
        }
      });
    });


    $(".autohide").each(function() {

      var checkhidden = localStorage.getItem($(this).find('input').attr('id'), "checkhidden");
      if (checkhidden === "checkhidden") {
        $(this).closest(".autohide").addClass("checkhidden");
      }
    });



  });
});
