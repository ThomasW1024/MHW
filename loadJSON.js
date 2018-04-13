////loadJSON
//function loadJSON(callback) {
//
//    var xobj = new XMLHttpRequest();
//    xobj.overrideMimeType("application/json");
//    xobj.open('GET', 'jewel.json', true);
//    xobj.onreadystatechange = function() {
//        if (xobj.readyState == 4 && xobj.status == 200) {
//
//            // .open will NOT return a value but simply returns undefined in async mode so use a callback
//            callback(xobj.responseText);
//
//        }
//    }
//    xobj.send(null);
//
//}
//var R5_list;
//var R6_list;
//var R7_list;
//var R8_list;
//var jewel_list;
//// Call to function with anonymous callback
//loadJSON(function(response) {
//    // Do Something with the response e.g.
//    //jsonresponse = JSON.parse(response);
//
//    // Assuming json data is wrapped in square brackets as Drew suggests
//    //console.log(jsonresponse[0].name);
//    jewel_list = JSON.parse(response);
//    jewel_list.jewel.forEach(
//        function(item){
//            var parent = document.getElementById("myDisplay");
//            parent.appendChild(document.createElement('div'));
//            parent.lastChild.innerHTML =
//                item.name + " "+ 
//                item.rarity + " " +
//                item.slot ;
//        
//        }
//    )
//});
//
function loadJson(fileName){
    return new Promise(
        function(resolve, reject){
            var xhttpReq = new XMLHttpRequest();
            xhttpReq.overrideMimeType("application/json");
            xhttpReq.open('GET', fileName, true);
            
            xhttpReq.onload = function (){
                
                if( xhttpReq.status == 200)
                    resolve(xhttpReq.response);
                else
                    reject(xhttpReq.statusText);
            }
            
            xhttpReq.onerror = function(){
                reject(Error("NetWorkError"));
            }
            
            xhttpReq.send();
        }
    );
}




//main();
loadJson('jewel.json').then(
    function(result) {
        myList = JSON.parse(result);
    }, function(err) {
        console.log(err); // Error: "It broke"
    }
);
