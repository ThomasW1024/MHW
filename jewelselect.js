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

function jewelRemove(){
    
}
function removeUSERChoice(){
    USER_CHOICE = [];
}


