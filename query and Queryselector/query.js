
// Write the code as shown in the video below:
const main=document.querySelector('#main-heading');
main.style.textAlign='right';

const fruits=document.querySelector('.fruits');
fruits.style.backgroundColor='grey'
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.borderRadius='5px';
fruits.style.listStyleType='none';

const basket=document.querySelector('h2');
basket.style.marginLeft='30px';
basket.style.color='brown'

const fruitsItems=document.querySelectorAll('.fruit');

for(let i=0;i<fruitsItems.length;i++){
  fruitsItems[i].style.backgroundColor='white'
  fruitsItems[i].style.padding='10px'
  fruitsItems[i].style.margin='10px'
  fruitsItems[i].style.borderRadius='5px'
  
}
const OddFruitItems=document.querySelectorAll('.fruit:nth-Child(even)');
for(let i=0; i<OddFruitItems.length;i++){
  OddFruitItems[i].style.backgroundColor='brown';
  OddFruitItems[i].style.color='white';
  
}