
const $event_1_nextButton = document.querySelector('#event_1 .next');
const $event_1_prevButton = document.querySelector('#event_1 .prev');

const $event_2_nextButton = document.querySelector('#event_2 .next');
const $event_2_prevButton = document.querySelector('#event_2 .prev');

// $event_1_nextButton.addEventListener('click', changeImage.bind(null, 1, '#event_1'));
// $event_1_prevButton.addEventListener('click', changeImage.bind(null, -1, '#event_1'));

$event_2_nextButton.addEventListener('click', changeImage.bind(null, 1, '#event_2'));
$event_2_prevButton.addEventListener('click', changeImage.bind(null, -1, '#event_2'));

function changeImage(counter, gallerySlider) {
  const images = document.querySelectorAll(gallerySlider + ' .images');

  var notDone = true;
  images.forEach((image, index) => {
    if (notDone && image.classList.contains('active')) {
      notDone = false;
      image.classList.remove('active');
      if (counter > 0 && index === images.length - 1) {
        images[0].classList.add('active');
      } else if (counter < 0 && index === 0) {
        images[images.length - 1].classList.add('active');
      } else {
        images[index + (counter)].classList.add('active');
      }
    }
  })
}