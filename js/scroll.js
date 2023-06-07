

let image1 = document.querySelector(".image1");
let image2 = document.querySelector(".image2");
let image3 = document.querySelector(".image3");
let image4 = document.querySelector(".image4");
let image5 = document.querySelector(".image5");
let image6 = document.querySelector(".image6");
let image7 = document.querySelector(".image7");

window.onscroll = function() {
    if(window.pageYOffset > 150){
        image1.classList.add('viev_elem');
    }
    if(window.pageYOffset > 200){
        image2.classList.add('viev_elem');
    }
    if(window.pageYOffset > 250){
        image3.classList.add('viev_elem');
    }
    if(window.pageYOffset >300){
        image4.classList.add('viev_elem');
    }
    if(window.pageYOffset > 350){
        image7.classList.add('viev_elem');
    }
}


'use strict';



const buttonThemeSansSerif = document.querySelector('.theme-button-Sans-Serif');
const buttonThemeSans = document.querySelector('.theme-button-Sans');
const buttonThemeSmall = document.querySelector('.theme-button-Small');
const buttonThemeMedium = document.querySelector('.theme-button-Medium');
const buttonThemeLargest = document.querySelector('.theme-button-Largest');

const buttonThemeSansHandler = () =>{
    document.documentElement.dataset['themeName'] = 'Sans';
    
}
const buttonThemeSansSerifHandler = () =>{
  document.documentElement.dataset['themeName'] = 'SansSerif';
  
}
const buttonThemeSmallHandler = () =>{
  document.documentElement.dataset['themeName'] = 'Small';
  
}

const buttonThemeMediumHandler = () =>{
  document.documentElement.dataset['themeName'] = 'Medium';
  
}

const buttonThemeLargestHandler = () =>{
  document.documentElement.dataset['themeName'] = 'Largest';
  
}
const buttonThemeBigFlopaHandler = () =>{
  document.documentElement.dataset['themeName'] = 'BigFlopa';
  
}
const init = () => {
    buttonThemeSans.addEventListener('click', buttonThemeSansHandler);
    buttonThemeSansSerif.addEventListener('click', buttonThemeSansSerifHandler);
    buttonThemeSmall.addEventListener('click', buttonThemeSmallHandler);
    buttonThemeMedium.addEventListener('click', buttonThemeMediumHandler);
    buttonThemeLargest.addEventListener('click', buttonThemeLargestHandler);


};
init();