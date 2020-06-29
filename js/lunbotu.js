function lunbo(oDiv, data, sudu, kuan, gao,doudou) {
  this.kuan = kuan;
  let html = "";
  let oUl = $(`<ul ></ul>`);
  let lSpan = $(
    "<span style='border-radius: 17.5rem;width: 3.5rem;height: 3.5rem;'>&lt;</span>"
  );
  let rSpan = $(
    "<span style='border-radius: 17.5rem;width: 3.5rem;height: 3.5rem;'>&gt;</span>"
  );
 let dd  = $("")

  lSpan.css({
    display: "block",
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
  lSpan.on("click", () => {
    i++;
    if (i > data.length - 1) {
      i = 0;
    } else if (i < 0) {
      i = data.length - 1;
    }
    console.log(i);
    oUl.css("left", `-${this.kuan * i}rem`);
  });
  rSpan.css({
    display: "block",
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
  rSpan.on("click", () => {
    i--;
    if (i > data.length - 1) {
      i = 0;
    } else if (i < 0) {
      i = data.length - 1;
    }
    console.log(i);
    oUl.css("left", `-${this.kuan * i}rem`);
  });
  lSpan.appendTo($(`${oDiv}`));
  rSpan.appendTo($(`${oDiv}`));
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
  let myTimer = setInterval(() => {
    i++;
    if (i > data.length - 1) {
      i = 0;
    } else if (i < 0) {
      i = data.length - 1;
    }

    oUl.css("left", `-${this.kuan * i}rem`);

    console.log(myTimer);
  }, sudu);
  $(oDiv).on("mouseenter", function () {
    clearInterval(myTimer);
  });
  $(oDiv).on("mouseleave", () => {
    myTimer = setInterval(() => {
      i++;
      if (i > data.length - 1) {
        i = 0;
      } else if (i < 0) {
        i = data.length - 1;
      }
      oUl.css("left", `-${this.kuan * i}rem`);
    }, sudu);
  });
}
