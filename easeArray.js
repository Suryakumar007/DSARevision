let arr = [0, 2, 2, 2, 0, 6, 6, 0, 0, 8]

let n = arr.length
let zeroCount=0
let positiveCount=0;

for(let i=0;i<n;i++){

    if(arr[i]==0){
        zeroCount++;
    }
    else if(arr[i]==arr[i+1] && arr[i]!=0){
        arr[i] = arr[i]+arr[i]
        arr[i+1]=0
        arr[positiveCount++]=arr[i]
    }
    else{
        arr[positiveCount++]=arr[i]
    }
}

for(let i = positiveCount;i<n;i++){
    arr[i]=0
}

for(let i in arr){
    console.log(arr[i]);
}