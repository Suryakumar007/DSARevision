let arr = [-2,-3,4,-1,-2,1,5,-3];

//let arr = [-4,-3,-2,-1]

let currentMax = arr[0]
let maxEndHere = arr[0]
let temp=arr[0];

let n = arr.length;
let i =1;

while(i<n){
    

    // if(maxEndHere<1){
    //     maxEndHere = 0
    // }
    temp = maxEndHere + arr[i]
    maxEndHere = Math.max(arr[i], temp)
    currentMax = Math.max(currentMax,maxEndHere)
    i++;
    console.log("maxEnd here => " + maxEndHere)
    console.log("temp        => " + temp)
    console.log("current Max => " + currentMax)
    console.log("--------------")
}

console.log(currentMax);
