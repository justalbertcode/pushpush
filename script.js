//Get items

const input = document.querySelector('.input');
const out = document.querySelector('.out');
const btn = document.querySelector('.btn');
const clearbtn = document.querySelector('.clearBtn');


btn.addEventListener('click', () => {
   
    let outText = input.value;
    
    out.innerHTML += outText + `<br/>`;
  
    input.value = "";
  
});

clearbtn.addEventListener('click', () => {
   
    input.value = "";
    
    out.innerHTML = '';
  
});
