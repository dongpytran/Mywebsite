var scrolla = 0;
            var nav = document.querySelector('nav');
            window.addEventListener("scroll", function(){
              var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              if(scrollTop > scrolla){
                  nav.style.top = "-80px";
              }else{
                  nav.style.top = "0px";
              }
              scrolla = scrollTop;
      })