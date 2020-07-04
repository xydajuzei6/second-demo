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
      $(this).css({
        borderBottom: "0.4rem solid #005aaa",
        boxShadow: "0 0.5rem 2rem gray",
        zIndex: "1000",
      });
      $(this).children("img").css({
        display: "block",
        width: "25rem",
        height: "25rem",
        top: "0",
        left: "0",
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
        width: "23rem",
        height: "23rem",
        top: "1rem",
        left: "1rem",
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
  //news板块
  $(".pp-news").hover(
    function () {
      $(this).children("h2,h3").css("color", "rgb(12,94,168)");
      $(this).children("section").children().css({
        width: "100%",
        transition: "0.3s linear",
      });
    },
    function () {
      $(this).children("h2,h3").css("color", "#111");
      $(this).children("section").children().css({
        width: "3rem",
      });
    }
  );
  //链接板块
  $(".lj-content")
    .children("div")
    .hover(
      function () {
        $(this).css("boxShadow", "0.25rem 0.5rem 1rem gray");
        $(this).children("img").css({
          width: "120%",
          height: "120%",
          margin: "-0.5rem 0 0 -1rem",
          transition: "0.3s linear",
        });
      },
      function () {
        $(this).css("boxShadow", "none");
        $(this).children("img").css({
          width: "100%",
          height: "100%",
          margin: "0",
        });
      }
    );
  //心选轮播
  $(".xinxuan-click .xinxuan-span").click(function () {
    console.log($(this).parent().index());
    let x = $(this).parent().index();
    $(".xinxuan-box").css("left", `${-x * 60}rem`);
  });
  //人气轮播

  $(".renqi-tab .renqi-span").click(function () {
    let x = $(this).parent().index();
    console.log(x);

    $.ajax({
      type: "post",
      url: "../server/getrenqilist.php",
      dataType: "json",
      data: `x=${x}`,
    }).done((data) => {
      console.log(1);
      console.log(data);
      // $(".renqi-show-box")
      //   .eq(0)
      //   .children("img")
      //   .attr("src", `${data[0].imgSrc}`);
      // $(".renqi-show-box")
      //   .eq(0)
      //   .children("h2")
      //   .attr("src", `${data[0].goodsname}`);
      // $(".renqi-show-box")
      //   .eq(0)
      //   .children("h3")
      //   .attr("src", `${data[0].goodsId}`);
      data.forEach((item, index) => {
        $(".renqi-show-box")
          .eq(index)
          .children("img")
          .attr("src", `${item.imgSrc}`);
        $(".renqi-show-box").eq(index).children("h2").html(item.goodsname);
        $(".renqi-show-box").eq(index).children("h3").html(item.goodsId);
      });
    });
    console.log("123");
  });
  //购物车登录验证
  $("#cart").click(function () {
    let x = getItem("user");
    console.log(x);
    if (x == null) {
      alert("请先登录");
      location.href = "http://localhost:8383/zuoye/haier/client/denglu.html";
    } else {
      location.href = "http://localhost:8383/zuoye/haier/client/cart.html";
    }
  });
  //cookie
  function getItem(key) {
    let cookieSting = document.cookie; // "color=red; id=red2324"
    let cookies = cookieSting.split("; "); //["color=red","id=red2324"]
    for (let i = 0; i < cookies.length; i++) {
      let currentItem = cookies[i]; //"color=red"
      let temp = currentItem.split("="); //["color","red"];
      if (key === temp[0]) {
        return temp[1];
      }
    }
  }

  function setItem(key, value, day) {
    if (typeof day === "number" && day > 0) {
      let date = new Date();
      date.setDate(date.getDate() + day);
      document.cookie = `${key}=${value}; expires=` + date;
    } else {
      document.cookie = `${key}=${value}`;
    }
  }
  //监听的底部括号
});
