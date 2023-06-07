let upButton = document.querySelector('.up-button');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 750) {
        upButton.classList.add('shown');
    } else {
        upButton.classList.remove('shown');
    }
});

upButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});