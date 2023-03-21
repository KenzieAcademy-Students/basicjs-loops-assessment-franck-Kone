// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

let numbers = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848,
    179, 535, 940, 472,
];

document.write("<h1>Array Analyzer</h1>");
let displayNumbers = function () { // This function will display the array to the DOM
    return numbers;
}
document.write("<h3>Now analyzing the array: " + displayNumbers() + "</h3>");

// We want all answers to be rendered using an unordered list
document.write("<ul>");
// That means each answer will be rendered with li
// For example:
//     document.write("<li>First Number: " + numbers[0] + "</li>");
//     document.write("<li>Second Number: " + numbers[1] + "</li>");

let smallestNumber = Number.POSITIVE_INFINITY, largestNumber = 0, numbersDivisibleByEight = [], oddNumbers = [], averageValue, evenNumbers =[], sumOfAllNumbers = 0;

// create a function to get the result of all operations
function findNumbers() {

    for (let index = 0; index < numbers.length; index++) {
        let currentNumber = numbers[index];
        sumOfAllNumbers += numbers[index]

        // for the largest and the smallest number
        if (largestNumber < currentNumber) {
            largestNumber = currentNumber
        } else if (currentNumber < smallestNumber) {
            smallestNumber = currentNumber
        } 

        // for even odd numbers and divisible by 8
        if (currentNumber % 2 === 0) {
            evenNumbers.push(currentNumber);

           if (currentNumber % 8 === 0) {
            numbersDivisibleByEight.push(currentNumber)
           }

        } else {
            oddNumbers.push(currentNumber)
        }
    }
    
    // for the average value of all the numbers in the array
    averageValue = (sumOfAllNumbers / numbers.length)
}
findNumbers();

document.write(`

<li>Largest Number: ${largestNumber}</li>
<li>Smallest Number: ${smallestNumber}</li>
<li>Sum: ${sumOfAllNumbers}</li>
<li>Average Value: ${averageValue}</li>
<li>Even Numbers: ${evenNumbers}</li>
<li>Odd Numbers: ${oddNumbers}</li>
<li>Numbers divisible by 8: ${numbersDivisibleByEight}</li>

`)


document.write("</ul>");
