$(() => {
  let user = getItem("user");
  function hanshu1() {
    let arr = [];
    $.ajaxSettings.async = false;
    $.ajax({
      type: "post",
      url: "../server/cartuser.php",
      dataType: "json",
      data: `user=${user}`,
    }).done((data) => {
      // $.ajaxSettings.async = false;
      data.forEach((item, index) => {
        $.ajax({
          type: "post",
          url: "../server/cartchaxun.php",
          dataType: "json",
          data: `goodsId=${item.goodsId}`,
        }).done((data) => {
          let obj = {};
          obj = data;
          obj.goodsNum = item.goodsNum;
          arr.push(obj);
        });
      });
      //
      //

      //
    });
    console.log("arr", arr[0].goodsNum);
    console.log(arr);
    console.log(arr[0], arr[0][0].imgSrc);

    let html = "";
    arr.forEach((item, index) => {
      html += `   <li class="show-box">
        <input class="cb1" type="checkbox" />
        <img
          class="show-img"
          src="${item[0].imgSrc}"
          alt=""
        />
        <h2 class="goodsname">${item[0].goodsname}</h2>
        <h3 class="goodsprice">￥${item[0].goodsPrice}</h3>
        <div class="anniu">
          <input class="jian" type="button" value="-" />
          <span class="goodsNum">${item.goodsNum}</span>
          <input class="jia" type="button" value="+" />
        </div>
        <h4 class="zongjia">￥${item[0].goodsPrice * item.goodsNum}</h4>
        <input class="cb2" type="button" value="删除" />
        <h5 class="goodsId" style="display: none;">${item[0].goodsId}</h5>
      </li>`;
    });
    $("#main-wrap").html(html);
  }
  //测试
  //添加点击事件
  //选择商品
  function hanshu2() {
    console.log(1);

    $("#main-wrap").on("click", ".cb1", function () {
      $(this).parent().toggleClass("ischecked");
      jiezhang();
    });
    //商品-1
    $("#main-wrap").on("click", ".jian", function () {
      let num = $(this).siblings(".goodsNum").html() - 1;
      let goodsId = $(this).parent().siblings(".goodsId").html();
      console.log(num, goodsId, user);
      if (num == 0) {
        $(this).parent().parent().css({
          display: "none",
        });
      }
      $(this).siblings(".goodsNum").html(num);
      $.ajax({
        type: "post",
        url: "../server/upddatedata.php",
        data: `goodsNum=${num}&user=${user}&goodsId=${goodsId}`,
      }).done((data) => {
        console.log(data);
      });
      xiaoji($(this));
      jiezhang();
    });
    //商品+1
    $("#main-wrap").on("click", ".jia", function () {
      let num = Number($(this).siblings(".goodsNum").html()) + 1;
      let goodsId = $(this).parent().siblings(".goodsId").html();
      $(this).siblings(".goodsNum").html(num);
      $.ajax({
        type: "post",
        url: "../server/upddatedata.php",
        data: `goodsNum=${num}&user=${user}&goodsId=${goodsId}`,
      }).done((data) => {
        console.log(data);
      });
      xiaoji($(this));
      jiezhang();
    });
    //商品删除
    $("#main-wrap").on("click", ".cb2", function () {
      $(this).parent().css("display", "none");
      let goodsId = $(this).siblings(".goodsId").html();
      $.ajax({
        type: "post",
        url: "../server/shanchushangping.php",
        data: `goodsId=${goodsId}&user=${user}`,
      }).done((data) => {
        console.log(data);
      });
    });
    //小计函数封装
    function xiaoji(the) {
      console.log("this", the);
      let money = Number(the.parent().siblings(".goodsprice").html().slice(1));
      let num = Number(the.siblings(".goodsNum").html());
      console.log(money, num);
      let price = money * num;
      the.parent().siblings(".zongjia").html(`￥${price}`);
    }
    //计算总价函数封装
    function jiezhang() {
      let goods = $(".ischecked");
      let price = 0;
      if (goods.length > 0) {
        for (let i = 0; i < goods.length; i++) {
          let money = Number(
            $(goods[i]).children(".goodsprice").html().slice(1)
          );
          let num = Number(
            $(goods[i]).children(".anniu").children(".goodsNum").html()
          );
          price += money * num;
        }
        $("#zonggong").html(price);
      } else {
        $("#zonggong").html(0);
      }
    }
    //全选
    $(".quanxuan1").click(function () {
      if ($(this).is(":checked")) {
        $(".cb1").prop("checked", true);
        $(".cb1").parent().addClass("ischecked");
        $(".quanxuan2").prop("checked", true);
      } else {
        $(".cb1").prop("checked", false);
        $(".cb1").parent().removeClass("ischecked");
        $(".quanxuan2").prop("checked", false);
      }
      jiezhang();
    });
    $(".quanxuan2").click(function () {
      if ($(this).is(":checked")) {
        $(".cb1").prop("checked", true);
        $(".cb1").parent().addClass("ischecked");
        $(".quanxuan1").prop("checked", true);
      } else {
        $(".cb1").prop("checked", false);
        $(".cb1").parent().removeClass("ischecked");
        $(".quanxuan1").prop("checked", false);
      }
      jiezhang();
    });
  }
  //cokie
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
  var myyibu = new Promise(function () {
    hanshu1();
  });
  myyibu.then(hanshu2());
});
