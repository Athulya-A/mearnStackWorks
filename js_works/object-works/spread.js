// spread operator

function add(...args){
    return args.reduce((n1,n2)=>n1+n2)
}
function findMax(...args){
    return args.reduce((n1,n2)=>n1>n2?n1:n2)
}
console.log(findMax(10,20,30,40,50,60,70));