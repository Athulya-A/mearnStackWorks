var arr=[10,10,20,20,30,30,40,40,50,50,50]
//10:2,20:2,30:2,40:2,50:3

var out={}

arr.map(num=>num in out?out[num]+=1:out[num]=1)
console.log(out);