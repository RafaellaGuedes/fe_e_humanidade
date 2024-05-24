    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId)

        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    };

    window.addEventListener('scroll', function () {
        var navbar = document.getElementById('navbar');
        var navbarHeight = navbar.offsetHeight;
        var scrollPosition = window.scrollY

        if (scrollPosition >= navbarHeight) {
            navbar.classList.add('fixed')
        } else (
            navbar.classList.remove('fixed')
        )
    })


    function redirecionar() {
        window.location.href = "./game.html";
    }