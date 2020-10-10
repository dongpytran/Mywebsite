
TweenMax.from(".hero", 1, {
    delay: 0.2,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.from("#brand", 1, {
    delay: 0.7,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.staggerFrom("#menu li a", 1, {
    delay: 1,
    opacity: 0,
    ease: Expo.easeInOut
}, 0.1);

new WOW().init();