// to find if two strings are anagrams or not

let str1="listen"
let str2="silent"


let sortedStr1 = str1.split("").sort().join("");
console.log(sortedStr1);
let sortedStr2 = str2.split("").sort().join("");
if (sortedStr1 === sortedStr2) {
    console.log("The strings are anagrams.");
}
else {
    console.log("The strings are not anagrams.");
}