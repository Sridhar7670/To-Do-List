let containers = document.querySelectorAll(".container");
let count=0;
//container=[to-do],[in progress],[done]

const draggingInfo = {
    //main source from where the element is being dragged 
    sourceContanier: null,
    //defines the html element wherever is being dragged 
    draggingElement: null,
};
console.log(draggingInfo);

function ondrop(event) {
    event.preventDefault();
    
    // Get the drop target, ensuring it's the correct container
    let targetContainer = event.target.closest('.container');
    const targetContainerId = targetContainer.id;
    // console.log(targetContainer.id)

    // Check if the source container and target container are the same
    if (targetContainerId !== draggingInfo.sourceContanier) {
       
        if(count==0){
            alert("Once you drop the task inside In progrss it can't be reverted back to main block");
         }
       
        count++;


        // Move the dragged element to the new container
        const draggingElement = document.getElementById(draggingInfo.draggingElement);
        targetContainer.querySelector('.cards-container').appendChild(draggingElement);
    } 
    // else {
    //     alert("Something dropped in the same container");
    // }
    let container = event.currentTarget;
    container.classList.remove('focused');
}

function OnDragStart(event) {
    //to check from which source do dragging is happening 
    draggingInfo.sourceContanier = event.target.getAttribute("data_container");
    // console.log(event.target.getAttribute("data_container"))
    //to check which element being dragged 
    draggingInfo.draggingElement = event.target.id; 
    // console.log(event.target)
    // console.log(event.target.getAttribute("class"));
}

function ondragenter(event) {
    let container = event.currentTarget;
    container.classList.add('focused');
    // Add highlight on drag enter
}

function ondragleave(event) {
    let container = event.currentTarget;
    container.classList.remove('focused');
   
   setTimeout(() => {
    let cards= document.querySelector(".cards");
    let grand_parent = ((cards.parentNode).parentNode);

     if(grand_parent.id=="done"){
     // console.log(cards.innerText);
     cards.classList.add("strike-through");
     }
     else{
         let cards= document.querySelector(".cards");
         cards.classList.remove("strike-through"); 
     }
   }, 2000);
   
}

function ondragover(event) {
    //if the dropped container is the same source container then preventdefault must be skipped    
    // console.log("dragover is happening ");
    let droppingContainerId = event.currentTarget.id;
    if (droppingContainerId !== draggingInfo.sourceContanier) event.preventDefault();
    //allows the drop 

}

for (let i = 0; i < containers.length; i++) {
    containers[i].addEventListener('dragover', ondragover);
    containers[i].addEventListener('drop', ondrop);
    containers[i].addEventListener('dragenter', ondragenter);
    containers[i].addEventListener('dragleave', ondragleave);
}
