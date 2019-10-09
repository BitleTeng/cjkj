window.onload = function() {
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

}