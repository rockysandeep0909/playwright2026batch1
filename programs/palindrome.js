//madam , gadag
// palindrome
let str="gadaga";
let reversed="";
for(let i=str.length-1;i>=0;i--){
    reversed=reversed+str[i];
}
if(str===reversed){
    console.log("This is a palindrome");
}
else{
    console.log("This is not a palindrome");
}