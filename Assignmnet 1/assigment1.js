
let myString = "Assigment of javascript!";
console.log("Original String:", myString);

// String Methods
console.log("Length of String:", myString.length);
console.log("Uppercase:", myString.toUpperCase());
console.log("Lowercase:", myString.toLowerCase());
console.log("Character at index 5:", myString.charAt(5));
console.log("Substring (0,10):", myString.substring(0, 10));
console.log("Slice (0,10):", myString.slice(0, 10));
console.log("Includes 'amazing'?:", myString.includes("amazing"));
console.log("Starts with 'JavaScript'?:", myString.startsWith("JavaScript"));
console.log("Ends with 'amazing!'?:", myString.endsWith("amazing!"));
console.log("Replace 'amazing' with 'awesome':", myString.replace("amazing", "awesome"));
console.log("Trimmed String:", myString.trim());
console.log("Split String by space:", myString.split(" "));


let myArray = ["apple", "banana", "cherry", "date"];
console.log("\nOriginal Array:", myArray);

// Array Methods
myArray.push("elderberry"); 
console.log("After push:", myArray);

myArray.pop();
console.log("After pop:", myArray);

myArray.unshift("apricot");
console.log("After unshift:", myArray);

myArray.shift(); 
console.log("After shift:", myArray);

console.log("Sorted Array:", myArray.sort());
console.log("Reversed Array:", myArray.reverse());

console.log("Joined Array:", myArray.join(" - "));

console.log("Index of 'banana':", myArray.indexOf("banana"));

console.log("Slice (1,3):", myArray.slice(1, 3));

let filteredArray = myArray.filter(item => item.length > 5);
console.log("Filtered (words longer than 5 chars):", filteredArray);

let mappedArray = myArray.map(item => item.toUpperCase());
console.log("Mapped (uppercase):", mappedArray);

let foundItem = myArray.find(item => item.startsWith("c"));
console.log("Find first element starting with 'c':", foundItem);
