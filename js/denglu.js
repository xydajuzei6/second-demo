$(() => {
  $("#username,#userpass").blur(function () {
    if ($(this).val().trim() != "") {
      $(this).removeClass("no");
    } else {
      $(this).addClass("no");
    }
  });
  $("#cb1").click(function () {
    if ($(this).is(":checked")) {
      $(this).removeClass("no");
    } else {
      $(this).addClass("no");
    }
  });
  setInterval(function () {
    if ($(".no").length == 0) {
      $("#login").css("background-color", "green");
    } else {
      $("#login").css("background-color", "rgb(198, 202, 203)");
    }
  }, 500);
  //登录
  $("#login").click(function () {
    if ($(".no").length != 0) {
      return;
    }
    let username = $.trim($("#username").val());
    let password = $.trim($("#userpass").val());

    $.ajax({
      type: "post",
      url: "../server/login.php",
      dataType: "json",
      data: `username=${username}&password=${md5(password).slice(0, 15)}`,
    }).done((data) => {
      // alert(data.msg);
      /* 如果 */
      if (data.status == "success") {
        alert(data.msg);
        /* 跳转 */
        location.href = "http://localhost:8383/zuoye/haier/client/index.html";
      } else {
        alert(data.msg);
      }
    });
  });
  //底部
});
