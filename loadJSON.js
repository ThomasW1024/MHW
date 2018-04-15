////loadJSON
//function loadJSON(callback) {
//
//    var xobj = new XMLHttpRequest();
//    xobj.overrideMimeType("application/json");
//    xobj.open('GET', 'jewel.json', true);
//    xobj.onreadystatechange = function() {
//        if (xobj.readyState == 4 && xobj.status == 200) {
//            // .open will NOT return a value but simply returns undefined in async mode so use a callback
//            callback(xobj.responseText);
//        }
//    }
//    xobj.send(null);
//
//}
//// Call to function with anonymous callback
//var myList = getCookie("tuple_list");
//if (myList == ""){
//    loadJSON(function(response) {
//        myList = JSON.parse(response);
//    });
//}
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