$(function () {
  $.get(
    "../server/lunbo1.php",
    (data) => {
      console.log(data);
      lunbo("#banner-wrap", data, 1000, 90, 28);
    },
    "json"
  );
});
