console.log("WAP to segregate even and odd numbers in a array");
let numarray=[1,2,3,4,5,6]
let even=[];
let odd=[];
let len=numarray.length;
for(let i=0;i<=len-1;i++)
{
    if(numarray[i]%2==0)
    {
        even.push(numarray[i]);
    }
    else
    {
        odd.push(numarray[i]);
    }
}
console.log(even);
console.log(odd);
