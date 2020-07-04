$(() => {
  let user = getItem("user");
  //   let arr = [];
  //   $.ajaxSettings.async = false;
  //   $.ajax({
  //     type: "post",
  //     url: "../server/cartuser.php",
  //     dataType: "json",
  //     data: `user=${user}`,
  //   }).done((data) => {
  //     // $.ajaxSettings.async = false;
  //     data.forEach((item, index) => {
  //       $.ajax({
  //         type: "post",
  //         url: "../server/cartchaxun.php",
  //         dataType: "json",
  //         data: `goodsId=${item.goodsId}`,
  //       }).done((data) => {
  //         let obj = {};
  //         obj = data;
  //         obj.goodsNum = item.goodsNum;
  //         arr.push(obj);
  //       });
  //     });
  //     //
  //     //

  //     //
  //   });
  //   console.log("arr", arr[0].goodsNum);
  //   console.log(arr);
  //   console.log(arr[0], arr[0][0].imgSrc);

  //   let html = "";
  //   arr.forEach((item, index) => {
  //     html += `   <li class="show-box">
  //       <input class="cb1" type="checkbox" />
  //       <img
  //         class="show-img"
  //         src="${item[0].imgSrc}"
  //         alt=""
  //       />
  //       <h2 class="goodsname">${item[0].goodsname}</h2>
  //       <h3 class="goodsprice">￥${item[0].goodsPrice}</h3>
  //       <div class="anniu">
  //         <input class="jian" type="button" value="-" />
  //         <span class="goodsNum">${item.goodsNum}</span>
  //         <input class="jia" type="button" value="+" />
  //       </div>
  //       <h4 class="zongjia">￥${item[0].goodsPrice * item.goodsNum}</h4>
  //       <input class="cb2" type="button" value="删除" />
  //     </li>`;
  //   });
  //   $("#main-wrap").html(html);
  //测试
  //添加点击事件
  $("#main-wrap").on("click", ".cb1", function () {
    console.log($(this));
    $(this).parent().toggleClass("ischecked");
  });
  $("#main-wrap").on("click", ".jian", function () {
    let num = $(this).siblings().html();
    $(this)
      .siblings(".goodsNum")
      .html(num - 1);
  });
  $("#main-wrap").on("click", ".jia", function () {
    let num = $(this).siblings(".goodsNum").html();
    $(this)
      .siblings(".goodsNum")
      .html(Number(num) + 1);
    $.ajax({
      type: "post",
      url: "../server/upddatedata.php",
      dataType: "json",
      data: `goodsNum=${num}&user=${user}`,
    }).done((data) => {
      console.log(data);
    });
  });
  $("#main-wrap").on("click", ".cb2", function () {
    $(this).parent().css("display", "none");
  });

  //

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
});
