let arr4 = [ 1, 3, 5, 7, 9,1, 3, 5, 7, 9, 1]

let arr = []

for(let i in arr4){
    arr[i]=0
}

console.log(arr)

let i =0;

while(i<arr4.length){
    arr[arr4[i] - 1]++
    i++
}

console.log(arr)

