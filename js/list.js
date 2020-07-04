$(function () {
  console.log("1");

  //list加载
  $.ajax({
    url: "../server/list.php",
    dataType: "json",
  }).done((data) => {
    console.log(data);
    let html = data
      .map((item) => {
        return `
        <li class="show-li">
        <img
          class="imgSrc"
          src="${item.imgSrc}"
          alt=""
        />
        <h2 class="goodsname">${item.goodsname}</h2>
        <h3 class="goodsId">${item.goodsId}</h3>
        <p class="jiage">参考价：<b class="goodsPrice">￥${item.goodsPrice}</b></p>
        <p class="mai">
          <i class="jiadian">${item.jiadian}</i>
          家电商在售
          <i class="iconfont">&#xe61c;</i>
          <i class="pingjia">${item.pingjia}</i>
        </p>
      </li>
              `;
      })
      .join("");
    $("#show-list").html(html);
  });
  //盒子阴影
  $("#show-list").on("mouseenter", ".show-li", function () {
    $(this).css({
      zIndex: "9",
      boxShadow: "0 0.25rem 0.5rem gray",
    });
  });
  $("#show-list").on("mouseleave", ".show-li", function () {
    $(this).css({
      zIndex: "0",
      boxShadow: "none",
    });
  });
  $("#show-list").on("click", ".show-li", function () {
    let x = $(this).children("h3").html();
    setItem("goodsId", x);
    location.href = "http://localhost:8383/zuoye/haier/client/xiangqing.html";
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
  //底部
});
