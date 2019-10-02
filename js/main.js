var glider;

var buttons = document.querySelectorAll('.contentChanger');
var contentElements = document.querySelectorAll('.content');
var footer = document.querySelectorAll('footer');

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
  });
}

function dispalyContents() {
  if (window.innerWidth < 1000) {
    contentElements.forEach(el => {
      el.classList.add('contentVisibility');
    });
  } else {
    hideContent();
    contentElements[0].classList.add('contentVisibility');
  }
}

window.addEventListener('resize', dispalyContents);

if (window.innerWidth < 1000) {
  glider = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    draggable: true,
    rewind: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
} else {
  glider = new Glider(document.querySelector('.glider'), {
    slidesToShow: 2.3,
    draggable: true,
    rewind: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
}

dispalyContents();

window.onload = () => {
  setTimeout(() => {
    glider.refresh();
    glider.resize();
  }, 100);
};
