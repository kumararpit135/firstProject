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
    list.appendChild(dlt)

    const ul=document.getElementById('listItem')
    ul.appendChild(list)
    dlt.addEventListener('click',function(){
        localStorage.removeItem(myObj.Email);
        list.remove()
    })
}
module.exports=handleFormSubmit