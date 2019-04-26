var buttons = document.querySelectorAll('button');
var contentElements = document.querySelectorAll('.content');

buttons.forEach((e, index) => {
  e.addEventListener('click', () => {
    hideContent();
    console.log(contentElements[index].classList.add('visible'));
  });
});

function hideContent() {
  contentElements.forEach(el => {
    el.classList.remove('visible');
  })
}
