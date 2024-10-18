// Write your code below:
const h=document.createElement('h3');
const p=document.createElement('p');
const para=document.createTextNode('Buy high quality organic fruits online');
const para2=document.createTextNode('Total fruits: 4')
const div=document.getElementsByTagName('div')[0]
h.appendChild(para)

h.style.fontStyle='italic'
div.appendChild(h)
p.appendChild(para2);

const fruit=document.querySelector('.fruits')
const secondiv=document.getElementsByTagName('div')[1]
p.setAttribute('id','fruits-total')

secondiv.insertBefore(p,fruit)