$(function () {
  //banner轮播图
  $.get(
    "../server/lunbo1.php",
    (data) => {
      lunbo("#banner-wrap", data, 1500, 90, 28, 1);
    },
    "json"
  );
  //心选tab
  $($(".xinxuan-tab").children()[0])
    .children("li")
    .on("click", "span", function () {
      $(this)
        .parent()
        .siblings()
        .children("span")
        .css({ borderBottom: "none", color: "#000" });
      $(this).css({
        color: "#005aaa",
        borderBottom: "0.3rem solid #005aaa",
      });
    });
  //心选大图鼠标滑过
  $(".xinxuan-content-wrap").hover(
    function () {
      $(".xinxuan-content-wrap").css({
        borderBottom: "0.4rem solid #005aaa",
        boxShadow: "0 0.5rem 2rem gray",
        zIndex: "1000",
      });
      $(".xinxuan-content-wrap").children("img").css({
        display: "block",
        width: "25rem",
        height: "25rem",
        margin: "0",
        transition: "0.2s linear",
      });
    },
    function () {
      $(".xinxuan-content-wrap").css({
        borderBottom: "none",
        boxShadow: "none",
        zIndex: "1",
      });
      $(".xinxuan-content-wrap").children("img").css({
        width: "23rem",
        height: "23rem",

        margin: "1rem",
      });
    }
  );
  //心选小图鼠标划过
  $(".xxcs").hover(
    function () {
      $(this).css({
        borderBottom: "0.3rem solid #005aaa",
        zIndex: "100",
        boxShadow: "0 0.5rem 1rem gray",
      });
      $(this).children("img").css({
        width: "11rem",
        height: "11rem",
        margin: "1rem auto 0",
        transition: "0.3s linear",
      });
    },
    function () {
      $(this).css({
        borderBottom: "none",
        boxShadow: "none",
        zIndex: "1",
      });
      $(this).children("img").css({
        width: "8rem",
        height: "8rem",
        margin: "3rem auto 0",
      });
    }
  );
  //人气tab
  $($(".renqi-tab").children()[0])
    .children("li")
    .on("click", "span", function () {
      $(this)
        .parent()
        .siblings()
        .children("span")
        .css({ borderBottom: "none", color: "#000" });
      $(this).css({
        color: "#005aaa",
        borderBottom: "0.3rem solid #005aaa",
      });
    });
  //人气show
  $(".renqi-show-box").hover(
    function () {
      $(this).children("img").css({
        width: "19rem",
        height: "19rem",
        margin: "0",
        transition: "0.2s linear",
      });
      $(this).css({
        boxShadow: "0 0.5rem 1rem gray",
      });
    },
    function () {
      $(this).children("img").css({
        width: "17rem",
        height: "17rem",
        margin: "1rem",
      });
      $(this).css({
        boxShadow: "0 0.25rem 0.5rem gray",
      });
    }
  );
  //活动板块
  $(".hd-img").hover(
    function () {
      $(this).css({
        borderBottom: "0.3rem solid #005aaa",
        boxShadow: "0 0.5rem 1rem gray",
        zIndex: "3",
      });
      $(this).children("img").css({
        width: "120%",
        height: "120%",
        margin: "-2rem 0 0 -2rem",
        transition: "0.2s linear",
      });
    },
    function () {
      $(this).css({
        borderBottom: "none",
        boxShadow: "none",
        zIndex: "1",
      });
      $(this).children("img").css({
        width: "100%",
        height: "100%",
        margin: "0",
      });
    }
  );
  //监听底部
});
