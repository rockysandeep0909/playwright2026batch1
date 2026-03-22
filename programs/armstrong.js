

let num=154;
let temp=0;
let abc=num;

while(num>0){
   let lastdigit= num%10; 
  
  temp= temp+lastdigit*lastdigit*lastdigit
   
 num=Math.floor(num/10);  
}

console.log(temp === abc ? "Armstrong" : "Not Armstrong")

