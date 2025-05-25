const accordionItems = document.querySelectorAll('.pergunta');

accordionItems.forEach(item => {
    const header = item.querySelector('h3');
    const content = item.querySelector('p');

    header.addEventListener('click', () => {
        content.classList.toggle('show');
    });
});
   // Animação dos contadores na seção de estatísticas
        document.addEventListener('DOMContentLoaded', () => {
            const counters = document.querySelectorAll('[data-counter]');
            const speed = 200;
            
            const animateCounters = () => {
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-counter');
                    const count = +counter.innerText;
                    const increment = target / speed;
                    
                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(animateCounters, 1);
                    } else {
                        counter.innerText = target;
                    }
                });
            };
            
            // Disparar animação quando a seção estiver visível
            const statsSection = document.querySelector('.stats-section');
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    animateCounters();
                    observer.unobserve(statsSection);
                }
            });
            
            observer.observe(statsSection);
        });