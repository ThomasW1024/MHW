// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myAdd");

// Get the <span> element that closes the modal
var span = document.getElementById("modalClose");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    var wrapper = document.getElementById("newTuple");
    createForm(wrapper);    
    
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    closeModalWrapper();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModalWrapper();
    }
}



function closeModalWrapper(){
    modal.style.display = "none";
    uncheckAll();
    removeForm();
    removeUSERChoice();
}

function removeForm(){
    var wrapper = document.getElementById("newTuple");
    while(wrapper.childElementCount != 0){
        wrapper.removeChild(wrapper.lastChild);
    }
    console.log(wrapper.childElementCount);
}

function createForm(parentElement){
    for(var i = 1; i <=3 ; i++){
        parentElement.appendChild(createJewelPlaceHolder(i, parentElement));
    }
}

function createJewelPlaceHolder(i, parentElement){
    var item = document.createElement("div");
    item.setAttribute("class", "new-jewel");
    //item.setAttribute("onclick", "jewelRemove()");
    item.innerHTML = "empty";
    
    item.onclick = function (){
        jewelRemove(i);
    }
    return item;
}