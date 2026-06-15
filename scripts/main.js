const ACTIVECLASS = 'active';
const IMAGES = document.querySelectorAll('.slider');

let activeImage = null;

function setActive(image) {
    if (activeImage) {
        activeImage.classList.remove(ACTIVECLASS);
    }
    image.classList.add(ACTIVECLASS);
    activeImage = image;
}

if (IMAGES.length > 0) {
    setActive(IMAGES[0]);
}

IMAGES.forEach(image => {
    image.addEventListener('click', event => {
        setActive(event.currentTarget);
    });
});

// menu bar (vanilla)
document.querySelector('.fa-bars')?.addEventListener('click', function () {
    this.classList.toggle('fa-times');
    document.querySelector('nav')?.classList.toggle('nav-toggle');
});
