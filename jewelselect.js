var USER_CHOICE = [];

function jewelSelect(id){
    //add to list
    if (USER_CHOICE.length >=3) {return;}
    USER_CHOICE.push(
        myList.jewel.find(function(item){
            return item.icon == id;
        })
    );
    //display
    DrawUserChoice();
    if (USER_CHOICE.length == 3){
        createSubmitButton();
    }

}
function checkEmpty(jewelPlaceHolder){
    return jewelPlaceHolder.innerHTML == "empty"; 
}

function DrawUserChoice(){
    var selectionList = document.getElementsByClassName("new-jewel");
    for( var holderIndex = 0 ; holderIndex < selectionList.length ; holderIndex++){
        var holder = selectionList.item(holderIndex);
        if(USER_CHOICE[holderIndex] != undefined){
            displayJewel(holder, holderIndex);
        }else{
            holder.innerHTML = "empty";
        }
    }
}

function displayJewel(holder, holderIndex){
    //TODO update Draw method
    holder.innerHTML = USER_CHOICE[holderIndex].icon;
}

function jewelRemove(i){
    if(i > USER_CHOICE.length){
    }else if (i == USER_CHOICE.length){
        USER_CHOICE.pop();
    }else{
        USER_CHOICE.splice((i.valueOf()-1), 1);
    }
    DrawUserChoice();
    removeSubmitButton();
}
function removeUSERChoice(){
    USER_CHOICE = [];
}

function createSubmitButton(){
    var submitButton = document.createElement("button");
        submitButton.setAttribute("id", "handIN");
        submitButton.onclick = function(){
            //TODO add cookie action;
        };
        submitButton.innerHTML = "save";
    document.getElementById("newTuple").appendChild(submitButton);
}

function removeSubmitButton(){
    var submitButton = document.getElementById("handIN");
    if( submitButton != undefined){
        submitButton.parentElement.removeChild(submitButton);
    }
}
