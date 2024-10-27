let totalCount=0;
const bookedSlots= new Set();
window.addEventListener("DOMContentLoaded",(event)=>{
    event.preventDefault();
    axios.get("https://crudcrud.com/api/ee2952a6465344978feed90f81f57716/movieTicket").
    then((res)=>{
        totalCount=res.data.length
        for(let i=0; i<res.data.length;i++){
            bookedSlots.add(res.data[i].Slot)
            displayUserOnScreen(res.data[i])
        }
        updateTotalCountDisplay()

    }).catch((rej)=>{
        console.log(rej)
    })
})
function handleFormSubmit(event) {
    event.preventDefault();
    const slot=document.getElementById('slot').value
    console.log(slot)
    const userDetails = {
      name: event.target.name.value,
      Slot:slot
    };
    
        if(bookedSlots.has(userDetails.Slot)){
            alert("you can not book This slot")
            console.log(bookedSlots)
        }else{
            axios.post("https://crudcrud.com/api/ee2952a6465344978feed90f81f57716/movieTicket",userDetails).
                then((res)=>{
                    totalCount++
                    bookedSlots.add(res.data.Slot)
                    displayUserOnScreen(res.data)
                    console.log(bookedSlots)
                }).catch((rej)=>{
                    console.log(rej)
                })
        }   
    
    document.getElementById("name").value = "";
    document.getElementById("slot").value = "";
  
  }
  
  function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.name} - ${userDetails.Slot}`
    )
    );
  
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);

  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);
    userItem.className="slots"
  
    const userList = document.querySelector("ul");+
    userList.appendChild(userItem);
    
    deleteBtn.addEventListener('click', function(){
        totalCount--
        userItem.remove()
        bookedSlots.delete(userDetails.Slot)
        updateTotalCountDisplay()
        axios.delete(`https://crudcrud.com/api/ee2952a6465344978feed90f81f57716/movieTicket/${userDetails._id}`)
        .catch((rej) => console.log(rej));

    })
    editBtn.addEventListener('click',function(){
        document.getElementById('name').value = userDetails.name; 
        document.getElementById('slot').value = userDetails.Slot;
        userItem.remove()
        bookedSlots.delete(userDetails.Slot)
        totalCount--
        updateTotalCountDisplay()
        axios.delete(`https://crudcrud.com/api/ee2952a6465344978feed90f81f57716/movieTicket/${userDetails._id}`)
        .catch((rej) => console.log(rej));

    })
  
  
}
function updateTotalCountDisplay() {
    const totalCountDisplay = document.getElementById("totalCount");
    totalCountDisplay.innerText = totalCount; 
}

const filter = document.getElementById('search');
filter.addEventListener("keyup", function (event) {

    const searchTerm = event.target.value;
    const check=document.getElementsByClassName('slots');
    for (let index=0;index<check.length;index++){
        const current=check[index].firstChild.textContent;
        console.log(current)
        if (current.indexOf(searchTerm)===-1){
            check[index].style.display="none"
        }else{
            check[index].style.display='flex'
        }
    }

});
