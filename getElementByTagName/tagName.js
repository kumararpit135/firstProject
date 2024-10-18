// Write your code below:
const tag=document.getElementsByTagName('li');

for (let i=0;i<tag.length;i++){
  tag[i].style.fontStyle='italic';
  if (i==4){
    tag[i].style.color='blue'
    }
}