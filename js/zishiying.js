window.onload = function () {
  //自适应布局
  var remStyle = document.createElement("style");
  var first1 = document.documentElement.firstElementChild.querySelectorAll(
    "link"
  )[1];
  document.documentElement.firstElementChild.insertBefore(remStyle, first1);
  let x = document.body.clientWidth / 96;
  remStyle.innerHTML = "html{font-size:" + x + "px;}";
  window.onresize = function () {
    let x = document.body.clientWidth / 96;
    remStyle.innerHTML = "html{font-size:" + x + "px;}";
  };
};
