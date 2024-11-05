// Write your code below:
window.addEventListener("DOMContentLoaded",(event)=>{
    event.preventDefault();
    axios.get("https://crudcrud.com/api/eba7df04b9714abf9a96062f9cb76d50/appointmentData").
    then((res)=>{
        for(let i=0; i<res.data.length;i++){
            displayUserOnScreen(res.data[i])
        }

    }).catch((rej)=>{
        console.log(rej)
    })
})
function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
    axios
      .post(
        "https://crudcrud.com/api/eba7df04b9714abf9a96062f9cb76d50/appointmentData",
        userDetails
      )
      .then((response) => displayUserOnScreen(response.data))
      .catch((error) => console.log(error));
  
    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  
  function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
  
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
  
    deleteBtn.addEventListener("click", function (event) {
        axios.delete(`https://crudcrud.com/api/eba7df04b9714abf9a96062f9cb76d50/appointmentData/${userDetails._id}`)
        
        userList.removeChild(event.target.parentElement);
        localStorage.removeItem(userDetails.email);
    });
  
    editBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      localStorage.removeItem(userDetails.email);
      document.getElementById("username").value = userDetails.username;
      document.getElementById("email").value = userDetails.email;
      document.getElementById("phone").value = userDetails.phone;
      axios.delete(`https://crudcrud.com/api/eba7df04b9714abf9a96062f9cb76d50/appointmentData/${userDetails._id}`)
      
    });
}

// Do not touch the code below
//module.exports = handleFormSubmit;
