$(document).ready(function() {
  $(function() {
    $(".hideshow").click(function(args) {
      var showStuff = $(this).prop("checked");
      $(this).closest(".autohide").each(function() {
        if (showStuff) {
          $(this).addClass("checkhidden");
          localStorage.setItem($(this).find('ínput').attr('id'), "checkhidden");
        } else {
          $(this).removeClass("checkhidden");
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
