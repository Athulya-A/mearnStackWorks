var pattern="ABBBBCC"

var wc={}
for(let char of pattern){
    //char A
    if(char in wc){
        console.log(`${char} is first recursive character`);
        break
    }
    else{
        wc[char]=1
    }
}