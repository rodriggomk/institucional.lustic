var wrapper = document.querySelector('.swiper-wrapper');

window.onscroll = () => stickyNavMenu();

var weedingGalery = document.getElementById('wedding-gallery');
var distance = weedingGalery.offsetTop;

var navbar = document.getElementById('nav');

function stickyNavMenu() {
  if (window.pageYOffset >= 5) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  } 

  console.log(distance)
  console.log(window.pageYOffset)

  if ((window.pageYOffset+200) >= distance) {
    navbar.classList.add('wedding-logo')
  } else {
    navbar.classList.remove('wedding-logo')
  }
}

var dimmer = document.querySelector('.dimmer');
var player = document.getElementById('player');
var playButton = document.querySelectorAll('.play-button');
var closePlayerButton = document.querySelector('.button-close');

playButton.forEach( button => {
  button.addEventListener('click', () => {
    var videoFile = `${Object.values(button.attributes)[1].value}.mp4`;
    var sourceTag = `<source src="content/fashion-films/${videoFile}" type="video/mp4">`;

    console.log(button)

    player.load()

    player.innerHTML = sourceTag;
    dimmer.classList.remove('hidden');
  })
})

closePlayerButton.addEventListener('click', () => {
  player.innerHTML = ''
  player.load()
  dimmer.classList.add('hidden');
})

function initSwiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 15,
    grabCursor: true,
    autoplay: true,
    loop: true,
    breakpoints: {
      1200: {
        /* slidesPerView: 3,
        spaceBetween: 40, */
      },
    },
  });
}

initSwiper();