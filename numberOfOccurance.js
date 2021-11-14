let a = [1,2,2,4,2,3,5,4]
let x = 2
let count = 0

for(let i in a){
    if(a[i] == x){
        console.log("Came");
        count++
    }
}

console.log(count);