function findLargest(arr)
 {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) 
{
        if (arr[i] > largest) 
{
            largest = arr[i];
        }
    }

    return largest;
}
let numbers = [10, 25, 5, 40, 15];

let result = findLargest(numbers);

console.log("Largest number:", result);


let numbers1 = [10, 45, 5, 40, 55];
let result1 = findLargest(numbers1);

console.log("Largest number:", result1);

