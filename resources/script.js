        var slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
          
            // Nav Button Interactivity

            var navIndex = 1;
            activeButtons(navIndex);

            function activeButtons (n) {
                var navButtons = document.getElementsByClassName("nav-buttons");
                var empathiseSlides = document.getElementsByClassName("empathise");
                var defineSlides = document.getElementsByClassName("define");
                var ideateSlides = document.getElementsByClassName("ideate");
                var prototypeSlides = document.getElementsByClassName("prototype");
                var testSlides = document.getElementsByClassName("test");
                
                if (slideIndex >= 1 && slideIndex < (empathiseSlides.length + 1)) {
                    navIndex = 1;
                } else if (slideIndex >= (empathiseSlides.length + 1) && slideIndex < (empathiseSlides.length + defineSlides.length + 1)) {
                    navIndex = 2;
                } else if (slideIndex >= (empathiseSlides.length + defineSlides.length + 1) && slideIndex < (empathiseSlides.length + defineSlides.length + ideateSlides.length + 1)) {
                    navIndex = 3;
                } else if (slideIndex >= (empathiseSlides.length + defineSlides.length + ideateSlides.length + 1) && slideIndex < (empathiseSlides.length + defineSlides.length + ideateSlides.length + prototypeSlides.length+ 1)) {
                    navIndex = 4;
                }
                for (i = 0; i < navButtons.length; i++) {
                    navButtons[i].className = navButtons[i].className.replace(" active-nav", "");
                }
                navButtons[navIndex-1].className += " active-nav";
            }

        }

