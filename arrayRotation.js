function rotateArray(arr,d){
    let temp = []

    for(let i=0;i<d;i++){
        temp.push(arr[i])
    }

    let j=d;

    for(let i=0;i<arr.length-d;i++){
        arr[i] = arr[j]
        j++
    }
    let k=0;

    for(let i = arr.length-d;i<arr.length;i++){
        arr[i] = temp[k]
        k++
    }

    for(let i in arr){
        console.log(arr[i]);
    }

}

let a = [1,2,3,4,5,6,7]
let d=3

rotateArray(a,d)

//time-complexity : O(n)
//space-complexity : O(d)