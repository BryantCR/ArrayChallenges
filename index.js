function alwaysHungry(arr) {
    // your code here 
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "food"){
            console.log("yummy");
            count = count + 1;
        }
    }
    if(count === 0){
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

                                        /*Function2*/

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 5){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

                                        /*Function3*/

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    let average = sum  / arr.length;
    var count = 0
    // count how many values are greated than the average
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > average){
            count = count + 1;
        }
    }
    
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

                                        /*Function4*/

function reverse(arr) {
    // your code here
    let reverseArray = [];
    for(let i = arr.length-1; i>=0; i--){
        reverseArray.push(arr[i]);
    }
    return reverseArray;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

                                        /*Function5*/

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    let sum = 0;

    for(let i = 0; i < n-2; i++){
        sum = fibArr[i] + fibArr[i + 1];
        fibArr.push(sum);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]