
    //--------------------------SLIDESHOW--------------------------//
$(document).ready(function () {

    var slideIndex = 0;

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("images");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "flex";
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }
    showSlides();

})
