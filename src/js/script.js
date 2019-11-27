//Swiperちゃん
var mySwiper = new Swiper('.swiper-container', {
    // ここからオプション
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
    //scrollbar: {
    //    el: '.swiper-scrollbar',
    //},
});

//WOWちゃん
//初期化
new WOW().init();

//hiraku.jsちゃん
$(".offcanvas-right").hiraku({
    btn: "#offcanvas-btn-right",
    direction: "right"
});

//トップページへ戻るボタンアクション
$('#page_top').click(function() {
    // animateメソッドを用いて、
    // アニメーション付きでスクロールするようにしてください。
    $('html, body').animate({
        'scrollTop': 0
    }, 500);
});

// ヘッダー内の<a>タグをクリックしたときのclickイベント
$('header a').click(function() {
    var id = $(this).attr('href');
    //スムーススクロールの処理
    var position = $(id).offset().top - '100';
    $('html,body').animate({
        'scrollTop': position
    }, '15');
    //ヘッダー選択次に下線をつけたままにしておく処理
    //一回消して
    $('header a').css('border-bottom', 'none');
    //下線をつける
    $(this).css('padding-bottom', '0.5rem');
    $(this).css('border-bottom', 'solid 2px red');
});

/*
計算してヘッダーからピクセル引く方法調べておく
*/

//アコーディオン部分
$('.accordion').click(function() {
    var $accordion = $(this).find('.accordion-wrapper');
    if ($accordion.hasClass('open')) {
        $accordion.removeClass('open');
        $accordion.slideUp();
        $(this).find('.accordion-icon p').text('+');
    } else {
        //openが選択された時
        $accordion.addClass('open');
        //スライドダウン
        $accordion.slideDown();
        //アイコンを変更
        $(this).find('.accordion-icon p').text('-');

        //ディスプレイflexに変更
        //$accordion.css('display', 'flex');


    }
});

//border消さなあかん

//モーダル表示の処理

$(function() {
    $('.privacy-open').click(function() {
        $('.modal').fadeIn();
    });
    $('.privacy-close').click(function() {
        $('.modal').fadeOut();
    });

});