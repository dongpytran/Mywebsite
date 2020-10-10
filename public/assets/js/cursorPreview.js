var follower = $(".cursor-follower"),
      cursorm = $(".cursor1");

            var posX = 0,
                posY = 0,
                mouseX = 0,
                mouseY = 0;

            TweenMax.to({}, 0.016, {
                repeat: -1,
                onRepeat: function() {
                  posX += (mouseX - posX) / 9;
                    posY += (mouseY - posY) / 9;

                    TweenMax.set(follower, {
                        css: {
                            left: posX-16,
                            top: posY-16
                        }
                    });

                }
            });
            var pro1 = $(".project1");
            $(document).on("mousemove", function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            });
            $(".project").on("mouseenter", function() {
                cursorm.addClass("active");
                follower.addClass("active");
            });

            $(".project").on("mouseleave", function() {
                cursorm.removeClass("active");
                follower.removeClass("active");
            });
            $(".project").on("click", function() {
                cursorm.removeClass("active");
                follower.removeClass("active");
            });