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

let item = AccessoryFactory.get_accessory(1);
console.log(item.name); 