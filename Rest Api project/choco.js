window.addEventListener("DOMContentLoaded",function(event){
    
    readItems();
});


function readItems() {
    axios.get("https://crudcrud.com/api/6db63175cce445ffb221d41838c24e95/arpit")
    .then((res) => {
        res.data.forEach(item =>{ displayUserOnScreen(item)});
    })
    .catch((err) => console.log(err));
}

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
    axios.post("https://crudcrud.com/api/6db63175cce445ffb221d41838c24e95/arpit",myobj
    ).then((res)=>{
        
        displayUserOnScreen(res.data)
    }).catch((rej)=>console.log(rej))
    
    
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
    list.innerHTML=`${obj.Name}-${obj.Des}-${obj.Price}-<span id="qty-${obj._id}">${obj.Quantity}</span>`
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
    axios.get(`https://crudcrud.com/api/6db63175cce445ffb221d41838c24e95/arpit/${obj._id}`)
    .then((res)=>{
        const itemfrom=res.data
        if (!itemfrom) {
            return
        }
        const currentQuality=itemfrom.Quantity
        if (currentQuality>=key){
            
            itemfrom.Quantity -= key;
            axios.put(`https://crudcrud.com/api/6db63175cce445ffb221d41838c24e95/arpit/${obj._id}`,{
                Quantity:itemfrom.Quantity
            }).then(()=>{
                const udateTheQuantity=document.getElementById(`qty-${itemfrom._id}`)
                if (udateTheQuantity){
                    udateTheQuantity.innerHTML=itemfrom.Quantity
                }
            }).catch(()=>{
                console.log("Error")
            })
        }else{
            alert("not have the quantity")
        }
    }).catch((rej)=>{
        console.log(rej)
    })
    
}

