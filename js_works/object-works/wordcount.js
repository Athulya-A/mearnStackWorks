var text="hello hai hello hai"

// var words=text.split(" ")
var wordCount={}
// for(let word of words){
//   if(word in wordCount){
//        wordCount[word]+=1
//    }
//    else{
//        wordCount[word]=1
//    }
// }
// console.log(wordCount);
text.split(" ").map(word=>word in wordCount?wordCount[word]+=1:wordCount[word]=1)
console.log(wordCount);

