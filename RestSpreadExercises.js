// Refactor:
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

// ES6 version:

const filterOutOdds = (...arguments) => arguments.filter(value => value % 2 === 0)

// findMin:
const findMin = (...arguments) => Math.min(...arguments)

// mergeObjects:
const mergeObjects = (object1, object2) => ({...object1, ...object2})

// doubleAndReturnArgs:
const doubleAndReturnArgs = (array, ...arguments) => [...array, ...arguments.map(value => value * 2)]

// Slice and Dice:

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    let randomIndex = Math.floor(Math.random() * items.length);
    items.filter((value, index) => !(index === randomIndex))
}

/** Return a new array with every item in array1 and array2. */
const extendArrays = (array1, array2) => [...array1, ...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */
function addKeyValue(object,key,value){
    const newObject = {...object}
    const {key = value} = newObject
    return newObject
}


/** Return a new object with a key removed. */
const removeObjectKey = (object, key) => {
    let newObject = { ...object }
    delete newObject[key]
    return newObject
}


/** Combine two objects and return a new object. */
const combineObjects = (object1, object2) => [...object1, ...object2]

/** Return a new object with a modified key and value. */
const updatedKeyValue = (object, key, value) => { 
    let newObject = {...object }
    newObject[key] = value;
    return newObject;
} 