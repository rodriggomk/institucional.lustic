
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
    slidesPerView: "auto",
    spaceBetween: 40,
    grabCursor: true,
    autoplay: true,
    loop: true,
  });
}

initSwiper();