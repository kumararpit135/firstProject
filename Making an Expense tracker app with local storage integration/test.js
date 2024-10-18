window.addEventListener('DOMContentLoaded',function(event){
    event.preventDefault()
    for(let i=0; i<localStorage.length;i++){
        const savedItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
        console.log(savedItem)
        display(savedItem)
    }
    
})
function handleFormSubmit(event){
    event.preventDefault()
    let expense=document.getElementById('expense').value
    let description=document.getElementById('des').value
    let selectedCategory = document.getElementById('anything').value;
    
    let myObj={
        Expense:expense,
        description:description,
        category:selectedCategory,

    }
    localStorage.setItem(myObj.Expense,JSON.stringify(myObj))
    display(myObj)
    
    
}
function display(myObj){
    const para=document.createElement('li');
    const dlt=document.createElement('button')
    dlt.textContent="delete-me"
    dlt.className="delte-me"
    const edit=document.createElement('button');
    edit.textContent="Edit-me"
    edit.className="edit-me"
    para.innerHTML=`${myObj.Expense} - ${myObj.description} -${myObj.category}`
    para.appendChild(dlt)
    para.appendChild(edit)
    const ul=document.getElementById('listItem');

    ul.appendChild(para)
    document.getElementById('expense').value=""
    document.getElementById('des').value=""
    dlt.addEventListener('click', function(){
        para.remove()
        localStorage.removeItem(myObj.Expense)
    })
    edit.addEventListener('click',function(){
        document.getElementById('expense').value = myObj.Expense; 
        document.getElementById('des').value = myObj.description;
        console.log(myObj)
        localStorage.removeItem(myObj.Expense)
        para.remove()
    })
}