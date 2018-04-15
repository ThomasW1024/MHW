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
    setCookie("sequence_index_pointer", sequence_index_pointer, 4000);
}

function incrementSequencePointer(){
    if (sequence_index_pointer == 2){
        sequence_index_pointer = 0;
    }else{
        sequence_index_pointer++;
    }
    setCookie("sequence_index_pointer", sequence_index_pointer, 4000);
}

function incrementTuplePointer(){
    if(tuple_index_pointer < tuple_list.length){
        tuple_index_pointer++;
    }
    setCookie("tuple_index_pointer", tuple_index_pointer, 4000);
}