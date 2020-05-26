jQuery(document).ready(function ($) {
  $(".sign-up-btn").on("click", function () {
    $(".modal-container").css("display", "flex");
  });

  $(".close-modal").on("click", function () {
    if ($(".modal-container").is(":visible")) {
      $(".modal-container").hide();
    }
  });

  $(".modal-tab").on("click", function () {
    // console.log(this);
    var this_id = $(this).children("a").attr("id");
    switch (this_id) {
      case "login-tab":
        $("#login-tab").parent().addClass("is-selected");
        $("#signup-tab").parent().removeClass("is-selected");

        $("#login-context").addClass("is-selected");
        $("#signup-context").removeClass("is-selected");
        break;
      case "signup-tab":
        $("#login-tab").parent().removeClass("is-selected");
        $("#signup-tab").parent().addClass("is-selected");

        $("#login-context").removeClass("is-selected");
        $("#signup-context").addClass("is-selected");
        break;
      default:
        break;
    }
    console.log(this_id);
  });
});
