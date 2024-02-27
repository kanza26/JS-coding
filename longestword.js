//find the longest word in a string
function longestWord(str){
    const arr=str.split(" ");
    console.log(arr.length); //['hi', 'i', 'love', 'javaScript', 'io', 'hi']
    let largest="";
    for (let i=0;i<arr.length;i++){
        if(arr[i].length<largest.length){
            largest=largest;
        }else{
            largest=arr[i];
        }
    }
    return `Largest word in a provided string is ${largest}`;
}
console.log(longestWord("hi i am javaScript lover"));
console.log(longestWord("I will be js developer one day"));

