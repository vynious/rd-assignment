
// swaps the value of the given index with the 
// value of the given string in the array
// if the value is not found in the array, 
// it returns an empty array.

function swapValue(value: string, index: number, arr: string[]): string[] {
    // guard statement to return the array if it is empty
    if (arr.length == 0) return arr; 

    // find index of the value in the array
    let indexValue = arr.indexOf(value);

    // guard statement to return the array if the value is not found
    if (indexValue == -1) return arr;

    // perform the swap
    let temp = arr[index];
    arr[index] = value;
    arr[indexValue] = temp;

    // return final array
    return arr;
   
}

function test() {
    console.log(swapValue("Pear", 3, ["Apple", "Pear", "Orange", "Grapes", "Banana"]));
    console.log(swapValue("Banana", 1, ["Apple", "Pear", "Orange", "Grapes", "Banana"])); 
    console.log(swapValue("Banana", 0, []));
}

test();