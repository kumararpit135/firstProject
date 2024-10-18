// Write your code below:
const fruit=document.getElementsByClassName('fruit');
for (let i=0; i<fruit.length;i++){
  if (i==2){
    fruit[i].style.backgroundColor='yellow'
  }
  fruit[i].style.fontWeight='bold'
}