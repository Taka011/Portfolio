'use strict'

$(function () {

//ページ内スクロール
    let navHeight = $(".header").outerHeight();

    $('a[href^="#"]').on("click", function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top - navHeight;
        $("html, body").animate({ scrollTop: position, }, 300, "swing");
        return false;
    });

    //ページトップ
    $("#js-page-top").on("click", function () {
        $("body,html").animate({ scrollTop: 0, }, 300);
        return false;
    });

    // ページフェードイン(ロードアニメーション)
    $(window).on('load', function() {
        setTimeout(function(){
            $('.mask').fadeOut(500);
        },1000);
    })
});
