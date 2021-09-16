function alwaysHungry(arr) {
    // your code here 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != "food"){
            arr = "I'm hungry";
            console.log(arr);
        }
        else{
            if(arr[i] === "food"){
                console.log("yummy");
            }
        }
        
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
    // your code here
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

                                        /*Function3*/

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i] / 7;
    }

    var count = 0
    // count how many values are greated than the average
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > sum){
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

    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

                                        /*Function5*/

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]