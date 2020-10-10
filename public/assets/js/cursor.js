const linkk = document.querySelectorAll('.bigger');
      const cursor = document.querySelector('.cursor1');

      const animateit = function (e) {
            const span = this.querySelector('.scale-this');
            const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,

            move = 7,
            xMove = x / width * (move) - move,
            yMove = y / height * (move) - move;

            span.style.transform = `translate(${xMove}px, ${yMove}px)`;
            cursor.style.transform = "scale(6)";

            if (e.type === 'mouseleave'){
                  span.style.transform = "";
                  cursor.style.transform = "";
                  
            }
      };

      const editCursor = e => {
            const { clientX: x, clientY: y } = e;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
      };

      linkk.forEach(b => b.addEventListener('mousemove', animateit));
      linkk.forEach(b => b.addEventListener('mouseleave', animateit));
      
      window.addEventListener('mousemove', editCursor);
      delete linkk;
//
      