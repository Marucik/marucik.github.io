var glider = new Glider(document.querySelector('.glider'), {
  slidesToShow: 2.3,
  draggable: true,
  rewind: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});

var buttons = document.querySelectorAll('.contentChanger');
var contentElements = document.querySelectorAll('.content');

buttons.forEach((e, index) => {
  e.addEventListener('click', () => {
    hideContent();
    setTimeout(() => {
      glider.refresh();
    }, 100);
    setTimeout(() => {
      glider.refresh();
    }, 100);
    contentElements[index].classList.add('contentVisibility');
  });
});

function hideContent() {
  contentElements.forEach(el => {
    el.classList.remove('contentVisibility');
  })
}
