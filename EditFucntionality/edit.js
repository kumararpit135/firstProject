// Write your code below:
function handleFormSubmit(event){
    event.preventDefault();
    const myObj={
        Name:event.target.username.value,
        Email:event.target.email.value,
        Phone:event.target.phone.value,
    }
    localStorage.setItem(myObj.Email,JSON.stringify(myObj))
    const list=document.createElement('li');
    list.textContent=`${myObj.Name} - ${myObj.Email} - ${myObj.Phone}`
    const dlt=document.createElement('button');
    dlt.textContent="Delete"
    dlt.className="dlt-btn"
    const edit=document.createElement('button');
    edit.textContent="Edit"
    edit.className="edit-btn"
    list.appendChild(dlt)
    list.appendChild(edit)
    console.log(list)

    const ul=document.getElementById('listItem')
    ul.appendChild(list)
    dlt.addEventListener('click',function(){
        console.log(localStorage.getItem(myObj.Email))
        localStorage.removeItem(myObj.Email);
        list.remove()
    })
    
    edit.addEventListener('click',function(){
        const againName=document.getElementById('username');
        const againEmail=document.getElementById('email');
        const againPhone=document.getElementById('phone');
        againName.value=myObj.Name;
        againEmail.value=myObj.Email;
        againPhone.value=myObj.Phone;
        localStorage.removeItem(myObj.Email);
        list.remove()
    })
}
//module.exports=handleFormSubmit;