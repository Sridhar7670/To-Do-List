let create_button = document.querySelectorAll(".create-button");
let issue_input = document.querySelector(".issue-input");
let cards_container = document.querySelector('.cards-container');
let cardCounter = 0;
const okButton = document.getElementById('ok-button');
const messageDiv = document.getElementById('message');
const root=document.querySelector(".root");


   // Show the message
   messageDiv.style.display = 'block';

   // Function to hide the message and show the content
   okButton.addEventListener('click', function() {
       messageDiv.style.display = 'none';
       root.style.display = 'flex'; // Show the app content
   });
create_button.forEach((button) => {
    button.addEventListener("click", onclickCreateIssue);
})

issue_input.addEventListener('keyup', (event) => {
    //if input key is enter key
    if (event.keyCode === 13) {
        const value = issue_input.value;
        if (value === "") {
            alert("please enter a task name");
        } else {
            addNewCard(value);
        }
    }
})

function onclickCreateIssue() {
    //hiding create button 
    create_button.forEach((button) => {
        button.classList.add("hide");
    });
    //unhiding input box
    issue_input.classList.remove("hide");
    issue_input.focus();
}

function addNewCard(value) {
    //creating div dynamically and assigning value 
    let cards = document.createElement('div');
    cards.classList.add("cards");
    cards.innerText = value;
    cards.setAttribute("draggable", "true");
    cardCounter++;
    cards.setAttribute("id", "card-" + cardCounter); 
    cards_container.appendChild(cards);
    //to extract parent and grandparent node and extract id of grandparent

    // console.log((cards.parentNode));
    // console.log((cards.parentNode).parentNode)
    let grand_parent = ((cards.parentNode).parentNode);

    //it will give the status in which element is it present ? to-do | In-progress | done
    cards.setAttribute("data_container", grand_parent.id);
    cards.addEventListener("dragstart", OnDragStart);
    //unhiding the button
    create_button.forEach((button) => {
        button.classList.remove("hide");
        button.classList.add("active");
    });
    //resetting the input value and hiding input box
    issue_input.value = '';
    issue_input.classList.add("hide");

    
    
   
}
 // Function to hide the message and show the content
 okButton.addEventListener('click', function() {
    messageDiv.style.display = 'none';
    
});