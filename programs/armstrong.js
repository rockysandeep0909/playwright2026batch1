// yet to implement final logic .... work in progress



let num=153;
let temp=0;


while(num>0){
   let lastdigit= num%10; 
  
  temp= temp+lastdigit*lastdigit*lastdigit
   
 num=Math.floor(num/10);  
}

console.log(temp === num ? "Armstrong" : "Not Armstrong")

 //let var const