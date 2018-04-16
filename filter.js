var flagR = document.getElementsByName("filterRarity");

flagR[0].onchange = function(){
    displayJewels(document.getElementById("jewels"), filter(5));
};

flagR[1].onchange = function(){
    displayJewels(document.getElementById("jewels"), filter(6));
};

flagR[2].onchange = function(){
    displayJewels(document.getElementById("jewels"), filter(7));
};

flagR[3].onchange = function(){
    displayJewels(document.getElementById("jewels"), filter(8));
};

/**
 *  function remove html "checked" attribute from radio
 *  @relation HTML Display, HTML logic
 */
function uncheckAll(){
    flagR.forEach(function(item) {
        item.checked = false;
    });
    cleanFilter();
};

/**
 * function that remove jewel display of ffilter list
 * @relation HTML Display
 */
function cleanFilter(){
    var holder = document.getElementById("jewels");
    while(holder.childElementCount >0){
        holder.removeChild(holder.lastElementChild);
    }
}
/**
 * function that filter out rarity from myList
 * @relation invovle(myList)
 * @param Rarity integer within (5 to 8 inclusive)
 * @return Sub-list 
 */
function filter(Rarity){
    return myList.jewel.filter(function (item){
       return item.rarity == Rarity; 
    });
}

/**
 *  function that display the jewel list for user to choose
 *  @relation HTML Display
 */
function displayJewels(parentElement, list){
    while(parentElement.lastElementChild != null){
        parentElement.removeChild(parentElement.lastChild)
    }
    list.forEach(function (item){
        drawJewel(parentElement, item);
    });
}

/**
 *  function that display jewel info on the list for user to choose
 *  @relation HTML Display
 */
function drawJewel(parentElement, item){
    //TODO update Draw method
        var newElement = document.createElement('div');
        newElement.innerHTML = item.name;
//        newElement.setAttribute("id", item.icon);
        newElement.setAttribute("onclick", "jewelSelect("+item.icon+")");
        parentElement.appendChild(newElement);
}

