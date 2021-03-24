// 1. Given an array, move the element at index 0 to the last position in the array. Return the modified array.
// Example:
// input: ['This', 'is', 'a', 'split', 'sentence.']
// output: ['is', 'a', 'split', 'sentence.', 'This']

function rearranger(arr) {
  let word
  word = arr.shift()
  arr.push(word)
  return arr
}


// ------------------------------------------


// 2. Given an array of numbers, return the largest number in the array.
// Example:
// input: [6, 4, 8, 33, 42, 10]
// output: 42


//  WITH STRETCH GOAL
function largestNum(arr) {
    let duplicate = {}
    let numLargest = 0
    let largest = arr[0]

    // itterates through the array and finds the largest number, stores it in 'largest'.
    for (let z = 1; z < arr.length; z++) {
        if (arr[z] > largest) {
            largest = arr[z]
        }
    }

    // itterates through the array and counts how many elements are equal to largest, stores it in 'numLargest'.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === largest) {
            numLargest++
        }
    }

    //  if there is more than one largest number return the 'duplicate' object, otherwise return the largest number.
    if (numLargest > 1) {
        duplicate[largest] = numLargest
        return duplicate
    } else {
        return largest
    }
}

/*
//  THIS WORKS (NOT INCLUDING THE STRETCH GOAL)
function largestNum(arr) {
    let largest = arr[0]
    arr.forEach(num => {
        if (num > largest) {
            largest = num
        }
    }
        )
      
    return largest
}
*/


// ------------------------------------------


// 3. Given an array of numbers, return an array where every element in the given array is multiplied by the length of the given array.
// Example:
// input:  [4, 2, 1, 7]
// output: [16, 8, 4, 28]

function elemsTimesLength(arr) {
    const map1 = arr.map(x => x * arr.length)
    return map1
}


// ------------------------------------------



//4. Flights from Boise. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, by default return the standard cost unless firstClass is set to true

let flights = [{
    from: 'BOI',
    to: 'LAX',
    prices: {
        standard: 500,
        firstClass: 2200
    }
}, {
    from: 'BOI',
    to: 'SEA',
    prices: {
        standard: 800,
        firstClass: 1200
    }
}, {
    from: 'BOI',
    to: 'CAN',
    prices: {
        standard: 750,
        firstClass: 6200
    }
}]


function flightCost(destination, firstClass) {
//***hint: use the find method***
    destination = destination.toUpperCase()
    // firstClass = firstClass.toLowerCase()
    const trip = flights.find(flight => flight.to === destination)
    if (firstClass === true) {
        return trip.prices.firstClass
    } else {
        return trip.prices.standard
    }
}


// ------------------------------------------


// 5. Given a number, return the corresponding user object from the staff array that has the given number as the value of their id property. If no user is found, return an object with an error property and value of "No user with that id."
// Example:
// input: 17
// output: {id: 17, name: 'St. MaryLou de la Playa Carmen'}
//Example:
// input: 1000
// output: { error: "No user with that id." } 


let staff = [{ id: 1, name: 'Jon' }, { id: 2, name: 'Yuli' }, { id: 21, name: 'Peter' },
{ id: 17, name: 'St. MaryLou de la Playa Carmen' }, { id: 51, name: 'Doug' },
{ id: 881, name: 'Paul' }, { id: 0, name: 'Jon' }, { id: 999, name: 'Timma' }]

function findById(id) {
//    debugger
  let notFound = {error: 'No user with that id'}
  const found = staff.find(person => person.id === id)
  if (found) {
      return found
  } else {
    return notFound
  }
}


// ------------------------------------------


// 6. Write a function that accepts a name argument and will loop over theBand members and return the band member's name and the instrument that he/she plays. Use string concatenation or interpolation to return a sentence with the following structure: "[band-members-name] is in the band and plays the [band-members-instrument]".
// Example:
// input: 'Johnny P'
// output: "Johnny P is in the band and plays the sax"

let theBand = {
    homeCity: "Birmingham",
    members: [{
        name: 'Johnny P',
        instrument: 'sax'
    }, {
        name: 'River',
        instrument: 'drums'
    }, {
        name: 'Kris',
        instrument: 'guitar'
    }]
}

function bandMemberDetails(name) {
    let lowerCaseName = name.toLowerCase()
    let response = ''
    theBand.members.forEach(member => {
        let memberLowerCase = member.name.toLowerCase()
        if (memberLowerCase === lowerCaseName || memberLowerCase.includes(lowerCaseName)) {
            response = `${member.name} is in the band and plays the ${member.instrument}`
            console.log(response)
        }
    })
    return response
}
