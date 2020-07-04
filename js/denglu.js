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

        if ($("#cb2").is(":checked")) {
          setItem("user", username, 7);
          setItem(username, password, 7);
        } else {
          setItem("user", username);
          setItem(username, password);
        }
        /* 跳转 */
        location.href = "http://localhost:8383/zuoye/haier/client/index.html";
      } else {
        alert(data.msg);
      }
    });
  });
  //cookie函数
  function getItem(key) {
    let cookieSting = document.cookie;
    let cookies = cookieSting.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      let currentItem = cookies[i];
      let temp = currentItem.split("=");
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
