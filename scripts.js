window.addEventListener("DOMContentLoaded", function () {
    // load the last visited section from local-storage - here "About Me" is the default
    const lastVisitedSectionId = localStorage.getItem('lastVisitedSection') || 'about';
    const lastVisitedSection = document.getElementById(lastVisitedSectionId);

    const allSections = document.querySelectorAll('.section');
    allSections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });

    // make the last visited section visible and active initially
    lastVisitedSection.style.display = 'block';
    lastVisitedSection.classList.add('active');

    const navLinks = document.querySelectorAll('.nav-links a, .side-nav ul a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // saving the last visited section to local-storage
            localStorage.setItem('lastVisitedSection', targetId);

            fadeOutCurrentSection(() => {
                fadeInNewSection(targetSection);
            });
        });
    });

    // func to fade out current section
    function fadeOutCurrentSection(callback) {
        const currentSection = document.querySelector('.section.active');
        if (currentSection) {
            currentSection.classList.remove('active');
            currentSection.classList.add('fade-out');
            setTimeout(() => {
                currentSection.style.display = 'none';
                currentSection.classList.remove('fade-out');
                if (callback) callback();
            }, 600);
        } else {
            if (callback) callback();
        }
    }

    // function to fade-in new section
    function fadeInNewSection(targetSection) {
        targetSection.style.display = 'block';
        setTimeout(() => {
            targetSection.classList.add('active');
        }, 50);
    }

    // sidenav toggling
    const sideNav = document.querySelector('.side-nav');
    const sideNavToggle = document.querySelector('.side-nav-toggle');

    sideNavToggle.addEventListener('click', () => {
        sideNav.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    });

    // side-navigation-toggle stuck to header
    // window.addEventListener('scroll', () => {
    //     if (window.scrollY > 100) {
    //         sideNavToggle.style.top = '20px';
    //     } else {
    //         sideNavToggle.style.top = '20px';
    //     }
    // });

    // close side nav
    const sideNavLinks = document.querySelectorAll('.side-nav ul a');
    sideNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            sideNav.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
    });

    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.35';

    const matrixChars = '01';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0f0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drops.length = Math.floor(canvas.width / fontSize);
        drops.fill(1);
    });

});
