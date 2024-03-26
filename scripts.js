

/* PERSONAL WEBSITE */


// Carousel //

const carouselInner = document.querySelector('.carousel-inner');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselInner.children.length;
    updatecarousel();
})

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselInner.children.length) % carouselInner.children.length;
    updatecarousel();
})

function updatecarousel() {
    const translateValue = -currentIndex * 100 + '%';
    carouselInner.style.transform = `translateX(${translateValue})`;
}


// MODAL // CHATGPT

const modal = document.getElementById('myModal');
const modalImage = document.getElementById('modalImage');
const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    item.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImage.src = this.querySelector('img').src;
    });
});

const closeModal = document.querySelector('.close');

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
console.log('Just a little test.');






