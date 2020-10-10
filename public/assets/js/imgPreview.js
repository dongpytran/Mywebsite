$(document).ready(function() {
    TweenMax.set(".projects-prv", { width: 0 });

    var tl = new TimelineLite();

    $(document)
      .on("mouseover", ".navi-item", function(evt) {
        tl = new TimelineLite();
        tl.to($(".projects-prv"), 1, {
          width: "400px",
          ease: Expo.easeInOut
        });
      })
      .on("mouseout", ".navi-item", function(evt) {
        tl = new TimelineLite();
        tl.to($(".projects-prv"), 0.5, {
          width: 0,
          ease: Expo.easeInOut
        });
      });
  });

  $(".nav-linkk-1").hover(function() {
    $(".projects-prv").css({ "background-image": "url(./assets/img/light.jpg)" });
  });

  $(".nav-linkk-2").hover(function() {
    $(".projects-prv").css({ "background-image": "url(./assets/img/they.jpg)" });
  });

  $(".nav-linkk-3").hover(function() {
    $(".projects-prv").css({ "background-image": "url(./assets/img/without.jpg)" });
  });

  $(".nav-linkk-4").hover(function() {
    $(".projects-prv").css({ "background-image": "url(./assets/img/lost.jpg)" });
  });

  $(".nav-linkk-5").hover(function() {
    $(".projects-prv").css({ "background-image": "url(./assets/img/faye.jpg)" });
  });

  $(".nav-linkk-6").hover(function() {
    $(".projects-prv").css({ "background-image": "url(./assets/img/hereicome.jpg)" });
  });

  $(".nav-linkk-7").hover(function() {
    $(".projects-prv").css({ "background-image": "url(./assets/img/onetribe.jpg" });
  });

  $(".nav-linkk-8").hover(function() {
    $(".projects-prv").css({ "background-image": "url(./assets/img/wildfire.jpg)" });
  });