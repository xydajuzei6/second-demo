$(function () {
  $("#phoneID").val(13926291888);
  $("#usernameID").val("zs");
  $("#passwordA").val(123);
  $("#passwordB").val(123);
  let imgCode;
  let zhuceAjax = 0;
  /*不传值，统一走默认值*/
  let captcha = new Captcha({
    lineWidth: 1, //线条宽度
    lineNum: 2, //线条数量
    // dotR: 200, //点的半径
    // dotNum: 1000, //点的数量
    preGroundColor: [10, 80], //前景色区间
    backGroundColor: [150, 250], //背景色区间
    fontSize: 40, //字体大小
    fontFamily: ["Georgia", "微软雅黑", "Helvetica", "Arial"], //字体类型
    fontStyle: "stroke", //字体绘制方法，有fill和stroke
    content: "0123456789", //验证码内容
    length: 4, //验证码长度
  });

  captcha.draw(document.querySelector("#captcha"), (r) => {
    console.log("验证码", r);
    imgCode = r;

    /* 自动触发标签的事件 */
    $("#imageCode").trigger("blur");
  });
  //input验证
  let options = {
    usernameID: {
      reg: `/^[a-zA-Z]{2,6}$/.test(val)`,
      msg: "用户名不符合规范!!!",
    },
    phoneID: {
      reg: `/^1[3-9]\\d{9}$/.test(val)`,
      msg: "手机号码不符合规范!!!",
    },
    passwordA: {
      reg: `/^[a-zA-Z0-9]{3,6}$/.test(val)`,
      msg: "密码不符合规范!!!",
    },
    passwordB: {
      reg: `$.trim($("#passwordA").val()) === val`,
      msg: "两次输入的密码不相同!!!",
    },
    imageCode: {
      reg: "val == imgCode",
      msg: "图形验证码不正确！！！",
    },
  };
  $("#oForm input").focus(function () {
    $(this).css({ border: "1px solid blue" });
  });
  $("#oForm input").blur(function () {
    $(this).css({ border: "1px solid black" });
    // if ($(this).val() == "") {
    //   $(this).parent().next().html("X&nbsp;请输入内容");
    //   $(this).css({ border: "1px solid red" });
    //   return;
    // }
    let option_id = this.id;
    let val = $.trim($(this).val());

    if (eval(options[option_id].reg)) {
      $(this).css({ border: "1px solid green" });
      $(this).parent().next().html("");
      $(this).removeClass("no");
    } else {
      $(this).css({ border: "1px solid red" });
      $(this).parent().next().html(options[option_id].msg);
      $(this).addClass("no");
    }
  });
  setInterval(function () {
    if ($(".no").length == 0 && $("#zhuce-radio").is(":checked")) {
      $("#zhuce").css("background-color", "green");
      zhuceAjax = 1;
    } else {
      $("#zhuce").css("background-color", "#c6cacb");
      zhuceAjax = 0;
    }
  }, 1000);
  //ajax
  $("#zhuce").click(function () {
    /* [1] 检查表单验证是否全部都通过，如果有一个没有通过那么就return  */
    $("#phoneID,#usernameID,#passwordA,#passwordB,#imageCode").trigger("blur");

    if (zhuceAjax == 0) {
      console.log(zhuceAjax);

      return;
    }
    console.log("zhuceAjax");

    let data = {
      username: $.trim($("#usernameID").val()),
      phone: $.trim($("#phoneID").val()),
      password: md5($.trim($("#passwordA").val())).slice(0, 15),
    };
    console.log("2");

    /* [3] 发送网络请求去执行注册 */
    $.get("../server/zhuce.php", function (data, status, xhr) {
      console.log(data, status, xhr);
    });
    console.log("3");
  });

  //监听加载底部括号
});
