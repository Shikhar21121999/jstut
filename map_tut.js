/*
This file is a way to learn and store learinings on map in js
*/

// from official docs
/*
The map() method creates a new array populated with the results 
of calling a provided function on every element in the calling array.

Syntax:
let newArray = arr.map(callback(currentValue[, index[, array]]) {
  // return element for newArray, after executing something
}[, thisArg]);

Parameters:
callback
Function that is called for every element of arr. Each time callback executes, the returned value is added to newArray.

The callback function accepts the following arguments:

currentValue
    The current element being processed in the array.
index Optional
    The index of the current element being processed in the array.
array Optional
    The array map was called upon.
thisArg Optional
    Value to use as this when executing callback.
Return Value:
    A new array with each element being the result of the callback function.
Description:
    map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results. callback is invoked only for indexes of the array which have assigned values (including undefined).

    It is not called for missing elements of the array; that is:

        indexes that have never been set;
        indexes which have been deleted.
*/

// example simple multiplying numbers in an array
const arr=[1,2,3,4]
// here we are storing the new array in map1
const map1=arr.map(x => x*2)
console.log(map1)

// dealing with index
// program to print the array in which each element is the sum of element in array and index
const map2=arr.map((x,index) => x+index);
console.log(map2)

// deal with complex objects
// lets say an array of objects in which there are arrays
