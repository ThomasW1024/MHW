'use strict';

class Accessory{
    constructor(name, rarity, image, color){
        // calling set method
        this.name = name; 
        this.rarity = rarity;
        this.image = image;
        this.color = color;
    }
    set name(val){
        this._name = val;
    }
    set rarity(val){
        this._rarity = val;
    }
    set image(val){
        this._image = val;
    }
    set color(val){
        this._color = val;
    }
    
    get image(){
        return this._image;
    }
    get name(){
        return this._name;
    }
    get rarity(){
        return this._rarity;
    }
    get color(){
        return this._color;
    }
    get colour(){
        return this._color;
    }
}

class AccessoryFactory{
    static get_accessory(id){
        switch(id){
            default:
                return new Accessory("not interested", 5, "", "#000000");
        }
    }
}

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'jewel.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == 200) {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}

var jewel_list;
// Call to function with anonymous callback
loadJSON(function(response) {
    // Do Something with the response e.g.
    //jsonresponse = JSON.parse(response);

    // Assuming json data is wrapped in square brackets as Drew suggests
    //console.log(jsonresponse[0].name);
    window.jewel_list = JSON.parse(response);
    for( var i in window.jewel_list.jewel){
        var parent = document.getElementById("display");
        parent.appendChild(document.createElement('p'));
        parent.lastChild.innerHTML =
            window.jewel_list.jewel[i].name + " "+ 
            window.jewel_list.jewel[i].rarity + " " +
            window.jewel_list.jewel[i].slot ;
        
    }
});

function test(){
    alert( window.jewel_list.length);
}

//
//let item = AccessoryFactory.get_accessory(1);
//console.log(item.name); 