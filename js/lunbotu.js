function lunbo(oDiv, data, sudu, kuan, gao, doudou) {
  let html = "";
  let oUl = $(`<ul ></ul>`);
  let lSpan = $(
    "<span style='border-radius: 17.5rem;width: 3.5rem;height: 3.5rem;'>&lt;</span>"
  );
  let rSpan = $(
    "<span style='border-radius: 17.5rem;width: 3.5rem;height: 3.5rem;'>&gt;</span>"
  );
  let dd = $("<figure></figure>");
  //豆豆
  dd.css({
    position: "absolute",
    width: `${data.length * 3}rem`,
    bottom: "2rem",
    left: `${kuan / 2}rem`,
    marginLeft: `-${data.length * 1.5}rem`,
    zIndex: "999",
    color: "white",
  });
  dd.appendTo($(`${oDiv}`));
  let html1 = "";
  for (let k = 0; k < data.length; k++) {
    html1 += '<i class="iconfont">&#xe6c3;</i>';
  }
  dd.html(html1);

  $(dd[0].querySelectorAll("i")).css({
    fontSize: "0.5rem",
    width: "2rem",
    lineHeight: "2rem",
    float: "left",
    margin: "0 0.1rem",
    height: "2rem",
    textAlign: "center",
    borderRadius: "2rem",
  });
  $(dd[0].querySelectorAll("i")[0]).css("border", "0.1rem solid white");
  //控制键
  lSpan.css({
    display: "none",
    background: "white",
    position: "absolute",
    top: `${gao / 2}rem`,
    left: "3rem",
    zIndex: "999",
    lineHeight: "3.5rem",
    textAlign: "center",
    fontSize: "2rem",
    color: "#000",
  });
  //向左移动
  lSpan.on("click", () => {
    i--;
    if (i > data.length - 1) {
      i = 0;
    } else if (i < 0) {
      i = data.length - 1;
    }
    console.log(i);
    oUl.css("left", `-${kuan * i}rem`);
    dd.children().css("border", "none");
    $(dd.children()[i]).css("border", "0.1rem solid white");
  });
  rSpan.css({
    display: "none",
    background: "white",
    position: "absolute",
    top: `${gao / 2}rem`,
    right: "3rem",
    zIndex: "999",
    lineHeight: "3.5rem",
    textAlign: "center",
    fontSize: "2rem",
    color: "#000",
  });
  //向右移动
  rSpan.on("click", () => {
    i++;
    if (i > data.length - 1) {
      i = 0;
    } else if (i < 0) {
      i = data.length - 1;
    }
    console.log(i);
    dd.children().css("border", "none");
    $(dd.children()[i]).css("border", "0.1rem solid white");
    oUl.css("left", `-${kuan * i}rem`);
  });
  lSpan.appendTo($(`${oDiv}`));
  rSpan.appendTo($(`${oDiv}`));
  //轮播图
  oUl.css({
    width: `${data.length * kuan}rem`,
    height: `${gao}rem`,
    position: "absolute",
  });
  oUl.appendTo($(`${oDiv}`));
  for (let i = 0; i < data.length; i++) {
    html += `
        <li style="float:left;"><img src=${data[i].src} alt=""></li>
      `;
  }
  oUl.html(html);
  let fuzi = oDiv + " " + "img";
  $(fuzi).css({
    display: "block",
    width: `${kuan}rem`,
    height: `${gao}rem`,
  });
  let i = 0;
  //轮播逻辑
  let myTimer = setInterval(() => {
    i++;
    if (i > data.length - 1) {
      i = 0;
    } else if (i < 0) {
      i = data.length - 1;
    }
    $(dd.children()).css("border", "none");
    $(dd.children()[i]).css({
      border: "0.1rem solid white",
    });
    oUl.css("left", `-${kuan * i}rem`);
  }, sudu);
  //banner逻辑
  $(oDiv).on("mouseenter", function () {
    clearInterval(myTimer);
    $(oDiv).children("span").css("display", "block");
  });
  $(oDiv).on("mouseleave", () => {
    $(oDiv).children("span").css("display", "none");
    myTimer = setInterval(() => {
      i++;
      if (i > data.length - 1) {
        i = 0;
      } else if (i < 0) {
        i = data.length - 1;
      }
      $(dd.children()).css("border", "none");
      $(dd.children()[i]).css({
        border: "0.1rem solid white",
      });
      oUl.css("left", `-${kuan * i}rem`);
    }, sudu);
  });
  //豆豆逻辑
  $(dd).on("click", "i", function () {
    index = $(this).index();
    dd.children().css("border", "none");
    $(dd.children()[index]).css("border", "0.1rem solid white");
    oUl.css("left", `-${index * kuan}rem`);
  });
  if (!doudou || doudou == undefined) {
    dd.css("display", "none");
  }
}
