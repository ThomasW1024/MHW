var USER_CHOICE = ["","",""];

/**
 *  function that handle user selection of "Jewel"
 *  @Relation HTML Event
 *  @param id = selected jewel id
 */
function jewelSelect(id){
    if (ifFull()) {
        return;
    }
    insertToChioce(id);
    if (ifFull()){
        createSubmitButton();
    }

}
/**
 *  function insert given "jewel" into USER_CHOICE 
 *  and update HTML by call %displayJewel(htmlElement, Jewel)
 *  @Relation involve( USER_CHOICE, myList)
 *  @param id = selected jewel id
 */
function insertToChioce(id){
    for (var i= 0; i < USER_CHOICE.length; i++){
       if(USER_CHOICE[i] == ""){
           USER_CHOICE[i] = myList.jewel.find(
               function(item){
                    return item.icon == id;
                }
           );
           displayJewel(document.getElementsByClassName("new-jewel").item(i), USER_CHOICE[i]);
           return;
       }
    }
}
/**
 *  function that check If USER_CHOICE fulled
 *  @relation involve(USER_CHOICE, myList)
 *  @return true if USER_CHOICE fulled with 3 jewel item
 *  @return false if any slot in 3 is not filled jewel
 */
function ifFull(){
    for (var i= 0; i < USER_CHOICE.length; i++){
       if(USER_CHOICE[i] == ""){
           return false;
       }
    }return true;
   
}

/**
 *  function that display selected jewel into given html holder
 *  @relation HTML Display
 */
function displayJewel(holder, jwl){
    //TODO update Draw method
    if(jwl != ""){
        holder.innerHTML = jwl.icon;
        var elem = document.createElement("img");
        elem.setAttribute("src", "Jewel_Icon/jpg/" + jwl.icon + ".jpg");
        elem.setAttribute("height", "64");
        elem.setAttribute("width", "64");
        holder.appendChild(elem);

    }else{
        holder.innerHTML = "empty";
    }
}
/**
 *  function that remove jewel from USERCHOICE when Element Onclick
 *  @relation HTML Event, involve(USER_CHOICE)
 */
function jewelRemove(i){
    if(i > USER_CHOICE.length){
        return;
    }else{
        USER_CHOICE[i] = "";
        displayJewel(document.getElementsByClassName("new-jewel").item(i), USER_CHOICE[i]);
    }
    removeSubmitButton();
}
/**
 *  function that remove all item in USER_CHOICE and restore its initial state
 *  @relation HTML Event, involve(USER_CHOCIE)
 */
function removeUSERChoice(){
    USER_CHOICE = ["","",""];
}

/**
 *  function that create Submit Button for Saving USER_CHOICE
 *  @relation HTML Display, involve(USER_CHOICE)
 */
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

/**
 *  function that remove Submit Button
 *  @relation HTML Display
 */
function removeSubmitButton(){
    var submitButton = document.getElementById("handIN");
    if( submitButton != undefined){
        submitButton.parentElement.removeChild(submitButton);
    }
}

/**
 *  function transfer USER_CHOICE array into tuple_list
 *  @relation involve(USER_CHOICE, tuple_list)
 */
function submitChoice(){
    drawNewTuple();
    tuple_list.push(USER_CHOICE);
    setCookie("tuple_list",JSON.stringify(tuple_list), 4000);
    
}
/**
 *  function that draw one tuple at the end of display area
 *  @relation HTML Display, involve(USER_CHOICE)
 */
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

/**
 *  function that draw all tuple in tuple_list
 *  should only call with Cookie
 *  @relation HTML Display, Cookie
 */
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