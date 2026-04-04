console.log("WAP to find smallest number in an array");
let numarray1=[4,60,20,30,40,50,3];
let less=numarray1[0];
for(let i=0;i<=numarray1.length-1;i++)
{
    if(numarray1[i]<less)
    {
        less=numarray1[i];
    }
    
}
console.log(less)
