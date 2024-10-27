// wow
new WOW().init();

// swiper_js
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  // autoplay: true, //オートプレイON
  speed: 1000, // スライド移動速度(デフォルトは300)
  // slidesPerGroupAuto: false,
  spaceBetween: 20, //ページ間の隙間(px)
  grubCursor: true, //クリックでスライド掴む
  slidesPerView: "auto",

  breakpoints: {
    1000: {
      spaceBetween: 40,
    },
  },

  // autoplay parameters
  autoplay: {
    delay: 4000, // ms秒後に次のスライドへ
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//アコーディオンメニュー
$(".faqs-list").on("click", function () {
  // alert("aaa");
  $(this).children(".faqs-list__text").slideToggle();
  if ($(this).hasClass("closed")) {
    $(this).removeClass("closed");
    $(this).children(".faqs-list__title").removeClass("closed");
  } else {
    $(this).addClass("closed");
    $(this).children(".faqs-list__title").addClass("closed");
  }
  return false;
});

//drawer menu
var drawerMenu = ".header__drawer-icon--var1, .header__drawer-icon--var2, .header__drawer-icon--var3, .header__drawer-icon, .header__menu-bgk, .header__menu-link ";
$(".header__drawer-icon--var").on("click", function (e) {
  e.preventDefault(); // aタグ無効化

  $(drawerMenu).toggleClass("opened");
  $("body").toggleClass("opened");
});

// ページ内スクロール
$("a[href^='#']").on("click", function () {
  //#から始まるURLがクリックされた時
  var header = $("header").innerHeight(); //固定ヘッダーの高さを取得
  var id = $(this).attr("href"); //クリックした要素のhref_idを取得
  var position = 0; //初期値を0とする。（スクロールトップid=#の場合を定義）
  if (id != "#") {
    //id=#以外のときに以下の処理を実行、id=#は0位置へ移動
    var position = $(id).offset().top - header; //idの上部位置を取得 上部-ヘッダー高さ
  }
  $(drawerMenu).removeClass("opened");
  $("body").removeClass("opened");
  $("html,body").animate(
    {
      scrollTop: position, //positionの位置に移動
    },
    300 //移動速度ミリ秒
  );
});

//送信フォーム
var submit = ".from__send-btn input";
$("#name, #name-kana, #checkbox").on("change", function () {
  if ($("#checkbox").prop("checked") === true && $("#name").val() !== "" && $("#name-kana").val() !== "") {
    // if (($("#name").val() !== "" && ($("#name-kana").value !== "")) {
    $(submit).prop("disabled", false);
  } else {
    $(submit).prop("disabled", true);
  }
});

// $(".to-top__wrapper").hide();

//スクロールが規定値に到達でボタン表示
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 200) {
    //100px以上スクロールした場合
    $(".to-top__wrapper").addClass("is-show");
  } else {
    $(".to-top__wrapper").removeClass("is-show");
  }
});
//ボタン押すとトップに戻る
$(".to-top__wrapper").on("click", function () {
  $("body,html").animate({ scrollTop: 0 }, 500);
  return false;
});
