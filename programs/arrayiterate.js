let marks=[90,95,85,98,90,70]

// PCM / 3 - average
// PCB / 3 - average

let sum=0;
for(let i=0;i<marks.length;i++){

    sum=sum+marks[i];

}
console.log("Average of this person is ",sum/marks.length);

//type coercison ---Loose/Abstract Equality
if(5=='5'){

    console.log("Equal");
}
else{
    console.log("not equal");
}

//Strict Equality
if(5==='5'){

    console.log("Equal");
}
else{
    console.log("not equal");
}
