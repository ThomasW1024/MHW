//loadJSON
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
    jewel_list = JSON.parse(response);
    for( var i in jewel_list.jewel){
        var parent = document.getElementById("myDisplay");
        parent.appendChild(document.createElement('div'));
        parent.lastChild.innerHTML =
            jewel_list.jewel[i].name + " "+ 
            jewel_list.jewel[i].rarity + " " +
            jewel_list.jewel[i].slot ;
        
    }
});
