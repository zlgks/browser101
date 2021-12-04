'use strict';

const screen = document.querySelector('.window_screen');
const outer = document.querySelector('.window_outer');
const inner = document.querySelector('.window_inner');
const cl = document.querySelector('.document_clientwidth');

update();

window.addEventListener('resize', () => {
    update();
})

function update() {
screen.innerHTML = `window.screen : ${window.screen.width}, ${window.screen.height}</br>`;
outer.innerHTML = `window.outer : ${window.outerWidth}, ${window.outerHeight}</br>`;
inner.innerHTML = `window.inner : ${window.innerWidth}, ${window.innerHeight}</br>`;
cl.innerHTML = `documentElement.clientWidth : ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}</br>`;
}