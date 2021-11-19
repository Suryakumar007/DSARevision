let a=[1, 2, 6, 3, 4, 5 ]
let b=[2, 4, 3, 1, 0]

let s = new Set()

for(let i in b){
    s.add(b[i])
}

for(let i in a){
    if(!s.has(a[i])){
        console.log(a[i]);
    }
}