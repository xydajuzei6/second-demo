$(() => {
  let goodsId = getItem("goodsId");
  console.log(goodsId);

  $.ajax({
    type: "post",
    url: "../server/xiangqing.php",
    dataType: "json",
    data: `goodsId=${goodsId}`,
  }).done((data) => {
    console.log(data[0]);

    $("#goodsImg").attr("src", `${data[0].imgSrc}`);
    $("#goodsName").html(data[0].goodsname);
    $("#goodsId").html(data[0].goodsId);
    $("#price").html(data[0].goodsPrice);
    $("#show-box").css("background-image", `url(${data[0].imgSrc})`);
  });
  let oMirrorBox = document.getElementById("mirror-box");
  let oBox = document.getElementById("img-box");
  let oShowBox = document.getElementById("show-box");
  let boxOffsetLeft = oBox.offsetLeft;
  let boxOffsetTop = oBox.offsetTop;

  let mirrorWidth = oMirrorBox.offsetWidth;
  let mirrorHeight = oMirrorBox.offsetHeight;

  // 给box绑定onmousemove事件，在鼠标移动时，让mirror-box跟着鼠标走。
  oBox.onmousemove = function (event) {
    let e = event || window.event;

    // 一、数据处理
    // 1、计算oMirrorBox应该出现的位置(基于父盒子oBox的left和top)
    // 鼠标距离页面的坐标的距离-大盒子距离页面的距离-放大镜的宽度的一半
    let left1 = e.pageX - boxOffsetLeft - mirrorWidth / 2;
    let top1 = e.pageY - boxOffsetTop - mirrorHeight / 2;
    // 2、处理边界
    if (left1 < 0) {
      left1 = 0;
    } else if (left1 + mirrorWidth > 475) {
      left1 = 475 - mirrorWidth;
    }

    if (top1 < 0) {
      top1 = 0;
    } else if (top1 + mirrorHeight > 475) {
      top1 = 475 - mirrorHeight;
    }

    // 二、外观呈现
    // 1、移动放大镜
    oMirrorBox.style.left = left1 + "px";
    oMirrorBox.style.top = top1 + "px";

    // 2、改变show-box的背景图片的位置
    oShowBox.style.backgroundPosition = `-${left1 * 4}px -${top1 * 4}px`;
  };
  $("#img-box").hover(
    function () {
      $("#show-box").css("display", "block");
      $("#mirror-box").css("z-index", "2");
    },
    function () {
      $("#show-box").css("display", "none");
      $("#mirror-box").css("z-index", "-1");
    }
  );

  //加入购物车
  $("#add").on("click", function () {
    let user = getItem("user");
    let goodsname = $("#goodsName").html();
    if (user == null) {
      alert("请先登录");
      location.href = "http://localhost:8383/zuoye/haier/client/denglu.html";
    } else {
      alert(`恭喜${user}老板喜提${goodsname}一台，请去购物车结账`);
      $.ajax({
        type: "post",
        url: "../server/xijiayi.php",
        data: `user=${user}&goodsId=${goodsId}`,
      }).done((data) => {
        console.log(data);
      });
      console.log(1);
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
});
