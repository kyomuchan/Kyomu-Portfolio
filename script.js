$(function () {
  //ページ内スクロール
  var navHeight = $(".nav").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position }, 300, "swing");
    return false;
  });
});

$(function () {
  //現在のページURLのハッシュ部分を取得
  const hash = location.hash;

  //ハッシュ部分がある場合の条件分岐
  if (hash) {
    //ページ遷移後のスクロール位置指定
    $("html, body").stop().scrollTop(0);
    //処理を遅らせる
    setTimeout(function () {
      //リンク先を取得
      const target = $(hash),
        //リンク先までの距離を取得
        position = target.offset().top;
      //指定の場所までスムーススクロール
      $("html, body").animate({ scrollTop: position }, 500, "swing");
    });
  }
});

$(function () {
  $(".md-btn").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      var target = $(this).data("target");
      var modal = document.getElementById(target);
      $(modal).find(".md-overlay,.md-contents").fadeIn();
    });
  });
  $(".md-close").on("click", function () {
    $(".md-overlay,.md-contents").fadeOut();
  });
});
