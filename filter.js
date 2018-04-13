var flagR = document.getElementsByName("filterRarity");

flagR[0].onchange = function(){
    console.log("Rarity 5 selected");
    displayJewels(document.getElementById("jewels"), filter(5));
};

flagR[1].onchange = function(){
    console.log("Rarity 6 selected");
    displayJewels(document.getElementById("jewels"), filter(6));
};

flagR[2].onchange = function(){
    console.log("Rarity 7 selected");
    displayJewels(document.getElementById("jewels"), filter(7));
};

flagR[3].onchange = function(){
    console.log("Rarity 8 selected");
    displayJewels(document.getElementById("jewels"), filter(8));
};

function uncheckAll(){
    flagR.forEach(function(item) {
        item.checked = false;
    });
    cleanFilter();
};

function cleanFilter(){
    var holder = document.getElementById("jewels");
    while(holder.childElementCount >0){
        holder.removeChild(holder.lastElementChild);
    }
}

function filter(Rarity){
    return myList.jewel.filter(function (item){
       return item.rarity == Rarity; 
    });
}

function displayJewels(parentElement, list){
    while(parentElement.lastElementChild != null){
        parentElement.removeChild(parentElement.lastChild)
    }
    list.forEach(function (item){
        drawJewel(parentElement, item);
    });
}

function drawJewel(parentElement, item){
    //TODO update Draw method
        var newElement = document.createElement('div');
        newElement.innerHTML = item.name;
//        newElement.setAttribute("id", item.icon);
        newElement.setAttribute("onclick", "jewelSelect("+item.icon+")");
        parentElement.appendChild(newElement);
}

