//Get items

const input = document.querySelector('.input');
const out = document.querySelector('.out');
const btn = document.querySelector('.btn');
const clearbtn = document.querySelector('.clearBtn');

//push btn
btn.addEventListener('click', () => {
   //get input value
    let outText = input.value;
   
   //push input value to the out-div
    out.innerHTML += outText + `<br/>`;
  
   //clear input
    input.value = "";
  
});

//clear btn
clearbtn.addEventListener('click', () => {
   
    input.value = "";
    
    out.innerHTML = '';
  
});
