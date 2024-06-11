ScrollReveal({
    reset: true,
    distance : '80px',
    duration : 2000,
    delay : 200
})
ScrollReveal().reveal('.my-self, .large-text, .not-a-special-name1', { origin: 'top' });
ScrollReveal().reveal('.cards, .my-projects, .inputs, .home-img', { origin: 'bottom' });
ScrollReveal().reveal('.special-name, .image-of-about', { origin: 'left' });
ScrollReveal().reveal('.about-my-self, .paragraph', { origin: 'right' });