const animatedElements = document.querySelectorAll('.animated-element');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

animatedElements.forEach(element => {
    observer.observe(element);
});