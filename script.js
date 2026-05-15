const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slide = document.querySelector('.slide');

function moveNext() {
    let items = document.querySelectorAll('.item');
    slide.appendChild(items[0]);
}

function movePrev() {
    let items = document.querySelectorAll('.item');
    slide.prepend(items[items.length - 1]);
}

next.addEventListener('click', moveNext);
prev.addEventListener('click', movePrev);

// Touch Support (Phone Swipe)
let startX = 0;
document.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) moveNext(); // Left Swipe
    if (endX - startX > 50) movePrev(); // Right Swipe
});
