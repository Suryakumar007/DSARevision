let arr = []

let testArray = []
let num = 78075

for(let i =0; i< num; i++){
    arr.push(Math.round(Math.random()))
}

// arr.sort()

// console.log(arr);

// or two pointer approach or find no of any digit

let zeroCount = 0;

for(let i in arr){
    if(arr[i] == 0){
        zeroCount++;
    }
}

console.log(zeroCount);

for(let i =0;i<zeroCount;i++){
    arr[i] = 0
}

for(let i = zeroCount;i<arr.length;i++){
    arr[i] = 1
}

console.log(arr);
