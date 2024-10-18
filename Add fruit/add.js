// Add the Edit Button:

const form=document.querySelector('form')
const fruits=document.querySelector('.fruits')
form.addEventListener('submit',function(event){
    event.preventDefault();
    const newli=document.createElement('li');
    const fruitToAdd=document.getElementById('fruit-to-add');
    
    newli.innerHTML=fruitToAdd.value + '<button class="delete-btn">x</button>'+'<button class="edit-btn">Edit</button>';
    console.log(newli)
  
    newli.className="fruit"
    console.log(newli)
    fruits.appendChild(newli);

})

fruits.addEventListener('click',function(event){ 
    if (event.target.classList.contains("delete-btn")){
        const toDelet=event.target.parentElement;
        fruits.removeChild(toDelet)
    }
})