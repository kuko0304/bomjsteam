const blocs2 = document.querySelector('.blocs2')
const blocs3 = document.querySelector('.blocs3')
const blocs4 = document.querySelector('.blocs4')
const blocs_text1 = document.querySelector('.blocs_text1')
const blocs_text2 = document.querySelector('.blocs_text2')

const blocs_text3 = document.querySelector('.blocs_text3')
const img_blocs = document.querySelector('.img_blocs')

const img_blocs3 = document.querySelector('.img_blocs3')
const img_blocs4 = document.querySelector('.img_blocs4')
blocs2.onclick = function(){
    img_blocs.style.opacity = '1';
    img_blocs.style.width = '20';
    img_blocs.style.height = '20';
    blocs_text1.textContent = 'Додано до бажаного';
   }
   blocs3.onclick = function(){
    img_blocs3.style.opacity = '1';
    img_blocs3.style.width = '20';
    img_blocs3.style.height = '20';
    blocs_text2.textContent = 'Відстежується';
   }
   blocs4.onclick = function(){
    img_blocs4.style.opacity = '1';
    img_blocs4.style.width = '20';
    img_blocs4.style.height = '20';
    blocs_text3.textContent = 'Ігнорується';
   }
