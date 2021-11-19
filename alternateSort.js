let arr = [1, 6, 9, 4, 3, 7, 8, 2]
arr.sort()
arr.sort(function (a, b)
        {
          return a - b;
        });
        console.log(arr);

let n = arr.length
let i = 0
let j = n-1

// for(i=0;i<n && i<=j;i++){
// console.log(arr[j--]);
// console.log(arr[i])
// }

// while(i<=j){
//     if(i!=j){
//         console.log(arr[j--]);
//         console.log(arr[i++])
//     }
//     else if(i==j){
//         console.log(arr[i]);
//         i++;
//     }
// }