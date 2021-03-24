// 1. Write a function that will iterate over an alphabetized string and return the 
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
let strCodesArr = []
let missingLetter = ''
for (let i = 0; i < str.length; i++) {
  strCodesArr.push(str.charCodeAt(i))
}
for (let j = 1; j < strCodesArr.length; j++) {
  let codeBefore = strCodesArr[j] - 1
  if (strCodesArr[j-1] !== codeBefore) {
    missingLetter = String.fromCharCode(codeBefore)
    }
  }
if(missingLetter) {
  return missingLetter
} else {
  return 'no missing letters'
}
}


// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)


/*
function sumEqualsTarget(arr, target) {
  let hit = false
  debugger
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        hit = true
      }
    }
  }
  return hit
}
*/

// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change 
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example: 
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {
}