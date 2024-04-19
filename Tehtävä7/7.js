'use strict'

//Open t7 folder in your IDE/editor. Make a hover effect with JavaScript. (2p)
// when user mouses over <p id="trigger"> change the picture of <img id="target"> form picA.jpg to picB.jpg
// when user mouses off, change the picture back to original

let button = document.querySelector('#trigger');
let img = document.querySelector('#target');

button.addEventListener('mouseenter', function (evt) {
    img.src = 'img/picB.jpg';
});

button.addEventListener('mouseleave', function (evt) {
    img.src = 'img/picA.jpg';
});