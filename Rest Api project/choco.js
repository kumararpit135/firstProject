window.addEventListener("DOMContentLoaded",function(event){
    event.preventDefault();
    for(let i=0;i<localStorage.length;i++){
        const saveITem=JSON.parse(this.localStorage.getItem(this.localStorage.key(i)))
        displayUserOnScreen(saveITem)
    }
})

function handleFormSubmit(event) {
    event.preventDefault();
    console.log("hii")
    const name=document.getElementById('name')
    const des=document.getElementById('des')
    const price=document.getElementById('price')
    const quantity=document.getElementById('quantity') 
    const myobj={
        "Name":name.value,
        "Des":des.value,
        "Price":price.value,
        "Quantity":quantity.value
    }
    localStorage.setItem(myobj.Name,JSON.stringify(myobj))
    console.log(myobj)
    displayUserOnScreen(myobj)
    
}
function displayUserOnScreen(obj){
    const btn1=document.createElement('button')
    btn1.innerHTML="Buy -1"
    btn1.className="but1"
    const btn2=document.createElement('button')
    btn2.innerHTML="Buy -2"
    btn2.className="but2"
    const btn3=document.createElement('button')
    btn3.innerHTML="Buy -3"
    btn3.className="but3"
    const list=document.createElement("li")
    const ul=document.getElementById('listItem')
    list.innerHTML=`${obj.Name}-${obj.Des}-${obj.Price}-<span id="qty-${obj.Name}">${obj.Quantity}</span>`
    list.appendChild(btn1)
    list.appendChild(btn2)
    list.appendChild(btn3)
    ul.appendChild(list)
    btn1.addEventListener("click",function(){
        functionHandle(obj,1)
    })
    btn2.addEventListener("click",function(){
        functionHandle(obj,2)
    })
    btn3.addEventListener("click",function(){
        functionHandle(obj,3)
    })

}
function functionHandle(obj,key){
    const itemfrom=JSON.parse(localStorage.getItem(obj.Name))
    if (!itemfrom)return ;
    const currentQuantity=itemfrom.Quantity;
    if (currentQuantity>=key){
        itemfrom.Quantity-=key;
        localStorage.setItem(itemfrom.Name,JSON.stringify(itemfrom))
    }
    const qultiyItem=document.getElementById(`qty-${itemfrom.Name}`)
    if(qultiyItem){
        qultiyItem.innerHTML=itemfrom.Quantity
    }
    
}

