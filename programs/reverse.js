let num=121;

let reversedNumber=0;

while(num>0){

   let lastdigit= num%10;                          //5 //4 //3 //2 //1 
   reversedNumber=reversedNumber*10+lastdigit;     //5 //54  //543 //5432 //54321
   num=Math.floor(num/10);                                    //1234 //123 //12 //1 //0
}


console.log("reversed number is "+ reversedNumber);
