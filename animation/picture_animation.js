window.addEventListener("scroll", show_img);

    function show_img() {
        const picture_left = document.querySelector(".picture_left");
        const picture_right = document.querySelector(".picture_right");
        const about_me_img = document.querySelector(".about_me_img");

        const trigger_height_left = picture_left.offsetTop - window.innerHeight;
        const trigger_height_right = picture_right.offsetTop - window.innerHeight;
        const my_img = about_me_img.offsetTop - window.innerHeight;

        if (window.scrollY > trigger_height_left) {
            setTimeout(function() {
                picture_left.classList.add("show");           
            }, 1000);
        }

        if ( window.scrollY > trigger_height_right){
            setTimeout(function() {
                picture_right.classList.add("show"); 
            }, 500);
        }

        if (window.scrollY > my_img){
            setTimeout(function() {
                about_me_img.classList.add("show");
            }, 500);
        }
    }