$(window).load(function() {
    let paused = document.querySelector("#play");
    let music_on = document.querySelector(".music-on");
    if (document.addEventListener) {
        music_on.addEventListener('click', function() {
            if (paused.paused) {
                paused.play();
                music_on.style.animationPlayState = "running";
                music_on.style.webkitAnimationPlayState = "running";
            } else {
                paused.pause();
                music_on.style.animationPlayState = "paused";
                music_on.style.webkitAnimationPlayState = "paused";
            }
        }, false);
    }
})
$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'coverflow',
        // autoplay: {
        //     disableOnInteraction: false,
        //     waitForTransition: true,
        // },
        coverflowEffect: {
            rotate: 60,
            stretch: 0,
            depth: 1000,
            modifier: 2,
            slideShadows: false
        },
        on: {
            init: function() {
                swiperAnimateCache(this);
                swiperAnimate(this);
            },
            slideChangeTransitionEnd: function() {
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            }
        },
    });
});