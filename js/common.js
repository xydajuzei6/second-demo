$(function () {
  for (let i = 0; i < 5; i++) {
    $($(".head-a1>li")[i]).on("mouseover", function () {
      $($(this).children(".list")[0]).css({ display: "block", zIndex: "9999" });
    });
    $($(".head-a1>li")[i]).on("mouseleave", function () {
      $($(this).children(".list")[0]).css("display", "none");
    });
  }
});
