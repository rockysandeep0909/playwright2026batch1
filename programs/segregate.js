let str = "abc123@#Xy9";

let alp="";
let dig="";
let spe="";


for(let i=0;i<str.length;i++){

   let char=str[i];

   if((char>='a' && char<='z')||(char>='A'&& char<='Z')){
        alp=alp+char;
   }


}

console.log(alp);