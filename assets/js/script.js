document.addEventListener("DOMContentLoaded", function () {
    // Select all links inside the Table of Contents
    document.querySelectorAll('#toc a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50, // Offset to prevent hiding content under fixed nav
                    behavior: 'smooth'
                });
            }
        });
    });
});
