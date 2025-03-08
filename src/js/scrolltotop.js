const scrollToTopBtn = document.getElementById("scrollToTopBtn");


scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});