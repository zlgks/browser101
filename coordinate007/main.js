'use strict';

const xLine = document.querySelector('.x-line');
const yLine = document.querySelector('.y-line');
const target = document.querySelector('.target');
const xy = document.querySelector('.xy');

document.addEventListener('mousemove', (event) => {
    xy.innerText = `${event.clientX}px, ${event.clientY}px`;
    xy.style.transform = `translate(40%, 40%)`;
    xy.style.left = `${event.clientX}px`;
    xy.style.top = `${event.clientY}px`;
    target.style.transform = `translate(-50%, -50%)`;
    target.style.left = `${event.clientX}px`;
    target.style.top = `${event.clientY}px`;
    xLine.style.transform = `translate(0px, ${event.clientY}px)`;
    yLine.style.transform = `translate(${event.clientX}px,0px)`;
})