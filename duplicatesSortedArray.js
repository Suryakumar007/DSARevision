let arr = [1,3,4,5,6,12,13,17,19,22,23,25,27,28,28,35,36,37,39,43,46,48,54,59,62,63,65,68,68,70,70,72,79,82,83 ,92 ,92 ,93, 95 ,96 ,96, 100]

let n = arr.length
let i=0,j=1
let count =0;

while(j<n)
{
    if(arr[i]!=arr[j]){
        console.log(arr[i++])
        count++
        j++
    }
    else{
        j++;
        i++;
    }
}
console.log(arr[n-1])
console.log(count+1)
