// WAP to find first non repeating character

let word = "EducationE";

for (let i = 0; i < word.length; i++) {

    let count = 0;

    for (let j = 0; j < word.length; j++) {
        if (word[i] === word[j]) {
            count++;
        }
    }

    if (count === 1) {
        console.log("First non-repeating character is:", word[i]);
        break;
    }
}
