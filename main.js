  // header-right mobile on click
        var a;

        function myFunction() {
            if (a == 1) {
                document.getElementById("M-nav-ham").style.display = "none";

                return (a = 0);
            } else {
                document.getElementById("M-nav-ham").style.display = "block";

                return (a = 1);
            }
        }

        // 

        function reset_animation() {
            var el = document.getElementById('M-nav-ham');
            el.style.animation = 'none';
            el.offsetHeight; /* trigger reflow */
            el.style.animation = null;
        }


        // header-blur on scroll
        window.onscroll = function() {
            HFunction()
        };

        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;

        function HFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }

        // slide-up animation
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        }

        // slide-in-from-left animation
        window.addEventListener("scroll", reveal);

        function reveal2() {
            var reveal2s = document.querySelectorAll(".reveal2");

            for (var i = 0; i < reveal2s.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveal2s[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveal2s[i].classList.add("active");
                } else {
                    reveal2s[i].classList.remove("active");
                }
            }
        }

        window.addEventListener("scroll", reveal2);


        // scale up animation
        window.addEventListener("scroll", reveal);

        function reveal3() {
            var reveal3s = document.querySelectorAll(".reveal3");

            for (var i = 0; i < reveal3s.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveal3s[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveal3s[i].classList.add("active");
                } else {
                    reveal3s[i].classList.remove("active");
                }
            }
        }

        window.addEventListener("scroll", reveal3);
    