const section = document.querySelector('.news-list');

const buttonCardViewTile = document.querySelector('.tile-view');
const buttonCardViewStandard = document.querySelector('.row-view');

const buttonCardViewTileHandler = () => {
    section.classList.remove('new-block');
    section.classList.add('list-tiles-view');
    buttonCardViewTile.classList.add('view-checked');
    buttonCardViewStandard.classList.remove('view-checked');
};

const buttonCardViewStandartHandler = () => {
    section.classList.remove('list-tiles-view');
    buttonCardViewTile.classList.remove('view-checked');
    buttonCardViewStandard.classList.add('view-checked');
};


let menu = document.querySelector('.menu');
let main = document.querySelector('.main-menu');

const buttonMenuOpen = () => {
    menu.classList.toggle('menu-close');
    menu.classList.toggle('menu-open');
};

menu.addEventListener('click', buttonMenuOpen);
const baton = document.querySelector(".toggle");
const box = document.querySelector(".container");

baton.addEventListener("click", function () {
    box.classList.toggle("theme2"); 
});