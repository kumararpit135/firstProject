// Add input element inside form, before button, to take fruit description
const form=document.querySelector('form')
const fruits=document.querySelector('.fruits')
form.addEventListener('submit',function(event){
    event.preventDefault();
    const newli=document.createElement('li');
    const descrip=document.getElementById('description').value
    const fruitToAdd=document.getElementById('fruit-to-add');
    const para=document.createElement('p');
    
    para.innerHTML=descrip;
    para.style.fontStyle='italic';

    newli.innerHTML=fruitToAdd.value + '<button class="delete-btn">x</button><button class="edit-btn">Edit</button>' ;
    newli.appendChild(para)
    
    newli.className="fruit"
   
    fruits.appendChild(newli);

})
const filter=document.getElementById('filter');
filter.addEventListener('keyup',function(event){
    const text=event.target.value.toLowerCase();
    const check=document.getElementsByClassName('fruit');
    for (let index=0;index<check.length;index++){
        const current=check[index].firstChild.textContent.toLowerCase();
        if (current.indexOf(text)===-1){
            check[index].style.display="none"
        }else{
            check[index].style.display='flex'
        }
    }
})