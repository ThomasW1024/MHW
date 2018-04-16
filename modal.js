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

/**
 *  function remove all element contain in Modal 
 *  @relation HTML Display
 */
function closeModalWrapper(){
    modal.style.display = "none";
    uncheckAll();
    removeForm();
    removeUSERChoice();
}
/**
 *  function that remove place holder for User Chocie display on HTML
 *  @relation HTML Display
 */
function removeForm(){
    var wrapper = document.getElementById("newTuple");
    while(wrapper.childElementCount != 0){
        wrapper.removeChild(wrapper.lastChild);
    }
}
/**
 *  function that create tuple display area for User Choice display on HTML
 *  @relation HTML Display
 */
function createForm(parentElement){
    for(var i = 0; i <3 ; i++){
        parentElement.appendChild(createJewelPlaceHolder(i, parentElement));
    }
}

/**
 *  function that create place holder for User Choice display on HTML
 *  @relation HTML Display
 */
function createJewelPlaceHolder(i, parentElement){
    var item = document.createElement("div");
    item.setAttribute("class", "new-jewel");
    //TODO
    item.innerHTML = "empty";
    
    item.onclick = function (){
        jewelRemove(i);
    }
    return item;
}