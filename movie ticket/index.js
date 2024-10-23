let totalCount=0;
const bookedSlots= new Set();
window.addEventListener("DOMContentLoaded",(event)=>{
    event.preventDefault();
    axios.get("https://crudcrud.com/api/4d673cd2900e4fe892b6c6146d7ec625/movieTicket").
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
    axios.post("https://crudcrud.com/api/4d673cd2900e4fe892b6c6146d7ec625/movieTicket",userDetails).
    then((res)=>{
        totalCount++
        bookedSlots.add(res.data.Slot)
        displayUserOnScreen(res.data)
    }).catch((rej)=>{
        console.log(rej)
    })
    // Clearing the input fields
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
  
    const userList = document.querySelector("ul");+
    userList.appendChild(userItem);
    deleteBtn.addEventListener('click', function(){
        totalCount--
        userItem.remove()
        bookedSlots.delete(userDetails.Slot)
        updateTotalCountDisplay()
        axios.delete(`https://crudcrud.com/api/4d673cd2900e4fe892b6c6146d7ec625/movieTicket/${userDetails._id}`)
        .catch((rej) => console.log(rej));

    })
    editBtn.addEventListener('click',function(){
        document.getElementById('name').value = userDetails.name; 
        document.getElementById('slot').value = userDetails.Slot;
        userItem.remove()
        bookedSlots.delete(userDetails.Slot)
        totalCount--
        updateTotalCountDisplay()
        axios.delete(`https://crudcrud.com/api/4d673cd2900e4fe892b6c6146d7ec625/movieTicket/${userDetails._id}`)
        .catch((rej) => console.log(rej));

    })
  
  
}
function updateTotalCountDisplay() {
    const totalCountDisplay = document.getElementById("totalCount");
    totalCountDisplay.innerText = totalCount; // Update the count in the UI
}

const filter = document.getElementById('search');
filter.addEventListener("keyup", function (event) {

    const searchTerm = event.target.value;
    if (bookedSlots.has(searchTerm)) {
        alert(`Slot ${searchTerm} is booked by ${userDetails.name}.`);
    } else {
        alert(`Slot ${searchTerm} is available.`);
    }
});
