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
            displayJewel(holder, USER_CHOICE[holderIndex]);
        }else{
            holder.innerHTML = "empty";
        }
    }
}

function displayJewel(holder, jwl){
    //TODO update Draw method
    var elem = document.createElement("img");
    
    elem.setAttribute("src", "Jewel_Icon/jpg/" + jwl.icon + ".jpg");
    elem.setAttribute("height", "64");
    elem.setAttribute("width", "64");
    
    holder.appendChild(elem);

    //holder.innerHTML = jwl.icon;
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
            submitChoice();
            closeModalWrapper();
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

function submitChoice(){
    drawNewTuple();
    tuple_list.push(USER_CHOICE);
    setCookie("tuple_list",JSON.stringify(tuple_list), 4000);
    
}
function drawNewTuple(){
    var parentElement = document.getElementById("myDisplay");
    var newCell = document.createElement('div');
    newCell.setAttribute("id", tuple_list.length);
    newCell.setAttribute("name", "userListCell");
    USER_CHOICE.forEach(function (jwl){
        newJwl = document.createElement("div");
        newJwl.setAttribute("name", "listJewel");
        displayJewel(newJwl, jwl);
        newCell.appendChild(newJwl);
    })
    parentElement.appendChild(newCell);
}

function drawTupleList(){
    var parentElement = document.getElementById("myDisplay");
    for(var i= 0; i < tuple_list.length; i++){
        var newCell = document.createElement('div');
        newCell.setAttribute("id", "list_" + i);
        newCell.setAttribute("name", "userListCell");
        tuple_list[i].forEach(function (jwl){
            newJwl = document.createElement("div");
            newJwl.setAttribute("name", "listJewel");
            displayJewel(newJwl, jwl);
            newCell.appendChild(newJwl);
        })
        parentElement.appendChild(newCell);
    };
}