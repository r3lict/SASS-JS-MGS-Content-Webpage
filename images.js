const imageContent = document.querySelector('.image-content');
const imageContentImages = document.querySelectorAll('.image-content img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = imageContentImages[0].clientWidth;

imageContent.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= imageContentImages.length - 1) return;
    imageContent.style.transition = "transform 0.8s ease-in-out";
    counter++;
    imageContent.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    imageContent.style.transition = "transform 0.8s ease-in-out";
    counter--;
    imageContent.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

imageContent.addEventListener('transitionend', () => {
    if (imageContentImages[counter].id === 'lastClone') {
        imageContent.style.transition = "none";
        counter = imageContentImages.length - 2;
        imageContent.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (imageContentImages[counter].id === 'firstClone') {
        imageContent.style.transition = "none";
        counter = imageContentImages.length - counter;
        imageContent.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});