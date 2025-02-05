// ================================================================================================================================================
// Header Burger Menu
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenuIcon = document.querySelector('.burger-menu__icon');
    const menuBody = document.querySelector('.menu');
    if(burgerMenuIcon) {
        burgerMenuIcon.addEventListener('click', (e)=> {
            document.body.classList.toggle('__lock');
            burgerMenuIcon.classList.toggle('__cross');
            menuBody.classList.toggle('__left');
        })
    }
})
// ================================================================================================================================================



// Page Scroll Animation
function pageScroll(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
        change.target.classList.add('__show');
    }
    });
    }
    let options = {
        threshold: [0.5] };
    let observer = new IntersectionObserver(pageScroll, options);
    let elements = document.querySelectorAll('.left-anim, .left-anim-banner, .scale-anim, .right-anim, .opacity-on, .left-anim-subheader__footer, .left-anim-subheader__reg, .scale-anim-subheader__frame');

    for (let elm of elements) {
        observer.observe(elm);
    }



// Registration Button Animation
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.reg-btn, .reg-form__buy, .form-reg__btn');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
        const parentOffset = button.getBoundingClientRect();
        const relX = e.pageX - window.scrollX - parentOffset.left;
        const relY = e.pageY - window.scrollY - parentOffset.top;
        const span = button.querySelector('.reg-btn__span, .form-reg__btn-span');
        if (span) {
            span.style.top = `${relY}px`;
            span.style.left = `${relX}px`;
        }
        });

    button.addEventListener('mouseout', function(e) {
        const parentOffset = button.getBoundingClientRect();
        const relX = e.pageX - window.scrollX - parentOffset.left;
        const relY = e.pageY - window.scrollY - parentOffset.top;
        const span = button.querySelector('.reg-btn__span, .form-reg__btn-span');
        if (span) {
        span.style.top = `${relY}px`;
        span.style.left = `${relX}px`;
        }
        });
    });
    });

// Menu Navigation
    document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.header__link');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if(burgerMenuIcon.classList.contains('__cross')) {
                document.body.classList.remove('__lock');
                burgerMenuIcon.classList.remove('__cross');
                menuBody.classList.remove('__left');
            }
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

// Registration Button Navigation to Registration Part
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.reg-btn, .header__registration');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if(burgerMenuIcon.classList.contains('__cross')) {
                document.body.classList.remove('__lock');
                burgerMenuIcon.classList.remove('__cross');
                menuBody.classList.remove('__left');
            }
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

// Registration Menu Open
document.addEventListener('DOMContentLoaded', function() {
    const regMenuBtn = document.getElementById('regMenu');
    const regMenu = document.getElementById('regMenuOpen');
    const regMenuClose = document.getElementById('closeReg');

    regMenuBtn.addEventListener('click', function() {
        regMenu.style.transform = "translateY(0)";
        document.body.classList.add('__lock');
    });

    regMenuClose.addEventListener('click', function() {
      regMenu.style.transform = "translateY(100%)"
      document.body.classList.remove('__lock');
    });

    window.addEventListener('click', function(event) {
        if (event.target === regMenu) {
            regMenu.style.transform = "translateY(100%)"
            document.body.classList.remove('__lock');
        }
    });
});