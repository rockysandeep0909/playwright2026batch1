console.log("WAP to move all the zeros to the end in a given array");


let arraylist = [0, 4, 2, 0, 5, 8, 9, 0, 1];
let news = [];

for (let i = 0; i < arraylist.length; i++) {
    if (arraylist[i] === 0) {
        news.unshift(0);   
    } else {
        news.push(arraylist[i]); 
    }
}


news.reverse();

console.log(news);
