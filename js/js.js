// Load JSON file
let openingAnimWindow = document.querySelector('#openingLottie');
let openingAnimData = {
  container: openingAnimWindow,
  animType: 'svg',
  loop: true,
  prerender: true,
  autoplay: true,
  path: 'json/cakeloading.json'
  
};
// set bodymovin
let openingAnim = bodymovin.loadAnimation(openingAnimData);

$('#lottie-start').click(function () {
  openingAnim.play();
});


