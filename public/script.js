$(".option").on("click", function() {
    $(".person-type").removeClass("active");
    $(".option").removeClass("active");
    $(this).addClass("active");
    var type = $(this).data("option");
    console.log($(type));
  
    setTimeout(function() {
      if (type === "home") {
        $(".home-body").addClass("active");
      } else if (type === "outdoor") {
        $(".outdoor-person").addClass("active");
      }
    }, 500);
  });