//获取列表数据
let lis = $(".js_product_list").children("li");
let arr = [];
for (i = 0; i < lis.length; i++) {
  let obj = {};
  let oli = $(lis[i]).children(".box");
  obj.imgSrc = oli.children("a").children("img").attr("src");
  obj.goodsname = oli.children(".textbox").children("a").html();
  obj.goodsId = oli.children(".textbox").children("p").html();
  obj.goodsPrice = oli.children(".jiage").children("b").html();
  obj.jiadian = oli.children(".Interaction").children("a")[0].innerHTML;
  obj.pingjia = oli.children(".Interaction").children("a")[1].innerHTML;
  arr.push(obj);
}

//获取详情数据
function getxinxi() {
  let obj = {};
  obj.imgSrc = $(".detail_top_product_preview_big").children("img").attr("src");
  obj.goodsname = $(".detail_top_content_right_title").children().eq(0).html();
  obj.goodsId = $(".detail_top_content_right_title").children().eq(1).html();
  obj.goodsPrice = $(".js_pro_price_box ").children(".sd_text").html().trim();
  obj;
}
