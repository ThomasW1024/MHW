var static_sequence = [1,1,2];
var sequence_index_pointer = 0;
var tuple_list = [];
var tuple_index_pointer = 0;

function passMission(){
    var count = static_sequence[sequence_index_pointer].valueOf;
    for(;count > 0;count--){
        incrementTuplePointer()
    }
    incrementSequencePointer();
}

function DoJewelRefining(){
    incrementTuplePointer();
}

function setSequencePointer(i){
    sequence_index_pointer = i;
}

function incrementSequencePointer(){
    if (sequence_index_pointer == 2){
        sequence_index_pointer = 0;
    }else{
        sequence_index_pointer++;
    }
}

function incrementTuplePointer(){
    if(tuple_index_pointer < tuple_list.length){
        tuple_index_pointer++;
    }
}