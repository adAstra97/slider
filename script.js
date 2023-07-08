let upBtn = document.querySelector('.up-button');
let downBtn = document.querySelector('.down-button');

let sidebar = document.querySelector('.sidebar');
let mainSlide = document.querySelector('.main-slide');
let slidesCount = mainSlide.children.length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;


upBtn.addEventListener("click", () => {
   changeSlide('up');
});

downBtn.addEventListener("click", () => {
   changeSlide('down');
});

document.addEventListener('keydown', (event) => {
   if (event.key === 'ArrowUp') {
      changeSlide('up');
   } else if (event.key === 'ArrowDown') {
      changeSlide('down');
   }
});

function changeSlide(direction) {
   if (direction === "up") {
      activeSlideIndex++;

      if (activeSlideIndex === slidesCount) {
         activeSlideIndex = 0;
      }
   } else if (direction === 'down') {
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
         activeSlideIndex = slidesCount - 1;
      }
   }

   mainSlide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`;
   sidebar.style.transform = `translateY(${activeSlideIndex * 100}vh)`;
}