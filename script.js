document.addEventListener("DOMContentLoaded", () => {
    const numero = document.querySelector("#contador");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let count = 0;
                const target = 100;
                const increment = Math.ceil(target / 100);
                const duration = 1500;
                const stepTime = Math.floor(duration / target);

                const counter = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        count = target;
                        clearInterval(counter);
                    }
                    numero.textContent = count;
                }, stepTime);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    observer.observe(document.querySelector("#nossos-numeros-show"));
});



document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    sections.forEach((section) => {
        observer.observe(section);
    });
});