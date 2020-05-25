jQuery(document).ready(function ($) {
  $(".sign-up-btn").on("click", function () {
    $(".modal-container").css("display", "flex");
  });

  $(".close-modal").on("click", function () {
    if ($(".modal-container").is(":visible")) {
      $(".modal-container").hide();
    }
  });
});
