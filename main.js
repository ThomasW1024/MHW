//main();
var static_sequence = [1,1,2];

var sequence_index_pointer = getCookie("sequence_index_pointer");
if(sequence_index_pointer == undefined){
    sequence_index_pointer = 0;
}

var tuple_list;
if(getCookie("tuple_list") == undefined){
    tuple_list = [];
}else{
    tuple_list = JSON.parse(getCookie("tuple_list"));
    drawTupleList();
}

var tuple_index_pointer = getCookie("tuple_index_pointer");
if(tuple_index_pointer == undefined){
    tuple_index_pointer = 0;
}
var myList;
if (getCookie("myList") == undefined){
    loadJson('jewel.json').then(
        function(result) {
            myList = JSON.parse(result);
            setCookie("myList", JSON.stringify(myList), 4000 );
        }, function(err) {
            console.log(err); // Error: "It broke"
        }
    );
}else{
    myList = JSON.parse(getCookie("myList"));
}
console.log(myList);
console.log(tuple_index_pointer);
console.log(tuple_list);
console.log(sequence_index_pointer);