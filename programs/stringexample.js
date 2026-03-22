let str="plAywright";
let count=0;

/// palindrome -------- SAAS .. madam .. Gadag ... 

/// 121 , 555 , 1001

let reversed="";

for(let i=str.length-1;i>=0;i--){
    reversed=reversed+str[i];

    let ch=str[i].toLowerCase();

    if(ch==='a' || ch==='e'|| ch==='i'||ch==='o'||ch==='u'){
        count++;
    }
}

console.log(reversed)
console.log("vowels count is ",count);