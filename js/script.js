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
        
    // ウインドウをスクロールしたら
    $(window).scroll(function (){
        // .js-fadeのクラスを持つ要素（それぞれに対して）
        $('.js-fade').each(function(){
            // この要素のスクロール位置（上から）
            var pos = $(this).offset().top;
            // ウインドウのスクロール量（上から）
            var scroll = $(window).scrollTop();
            // ウインドウの縦幅
            var windowHeight = $(window).height();
            // ウインドウのスクロール量（上から）が
            // この要素のスクロール位置 - ウインドウの縦幅 + 100pxより大きい場合
            if (scroll > pos - windowHeight + 100){
                // .scrollというクラス.js-fadeに付与する
                $(this).addClass('scroll');
            }
        });
    });
});
