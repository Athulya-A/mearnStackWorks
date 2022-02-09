var arr=[10,11,14,25,16,19,20]
arr.sort((n1,n2)=>n1-n2)
var low=0,upp=arr.length-1;
var element=11;
var count=1;
while(low<=upp){
    let mid= Math.floor((low+upp)/2) 
    //case 1
    if(element>arr[mid]){
        low=mid+1; 
    }
    //case 2
    else if(element<arr[mid]){
        upp=mid-1; 
    }
    //case 3
    else if(element==arr[mid]){
        flag=1;
        break;
    }
    count++;
}
console.log(arr);
console.log(flag==0?"ENF":"eFound");
console.log(count);