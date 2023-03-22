"use strict";

function printAllNumbersAndThenAllPairSums(numbers) {
    console.log("Numbers are:");
    numbers.forEach(number => console.log(number));     // O(n)

    console.log("Pair sums are:");
    numbers.forEach(firstOfPair => {
        numbers.forEach(secondOfPair => {
            console.log(firstOfPair + secondOfPair);        // O(n^2)
        })
    })
}

printAllNumbersAndThenAllPairSums([1, 2, 3, 4, 5]);
// Overall runtime complexity: O(n + n^2) = O(n^2)
////////////////////////////////////////////////////////////////////////////////////

// Space complexity:
function boooooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log("boooooo");
    }
}

boooooo([1, 2, 3, 4, 5]);
// Space complexity is: O(1)

////////////////////////////////////////////////////////////////////////////////////

function arrayOfHiNTimes(n) {
    let arrayHi = [];
    for (let i = 0; i < n; i++) {
        arrayHi[i] = "Hi";
    }
    return arrayHi;
}

console.log(arrayOfHiNTimes(6));
// Space complexity is: O(n)

////////////////////////////////////////////////////////////////////////////////////

// Find first and last element of array:
const array = ["Hi", "My", "Name", "Is", "JavaScript"];
console.log(array.at(0));   // O(1)
console.log(array.at(-1));  // O(1)

////////////////////////////////////////////////////////////////////////////////////

// Compare tweets based on their date:
const tweets = [
    {
        tweet: "Hi",
        date: 2021
    },
    {
        tweet: "From",
        date: 2022
    },
    {
        tweet: "JavaScript",
        date: 2023
    }
];
// Time complexity is: O(n^2)

////////////////////////////////////////////////////////////////////////////////////

// What is the time complexity of the following code:

"HelloFromJavaScript".length;

// That depends on built in method implementation but since javascript strings has length property
// So the time complexity is: O(1)

////////////////////////////////////////////////////////////////////////////////////

// Test data:
const first = ["a", "b", "c", "d", "x"];
const second = ["e", "f", "g", "x"];
