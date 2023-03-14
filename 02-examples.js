console.log("Hello, world!")

// Run node 02-examples.js in console to render file

// Defining a float point object a_number
const a_number = 123.45
console.log('the type of', a_number, 'is', typeof a_number)

// JavaScript does not differentiate between FP and integer 
const a_integer = 123
console.log("the type of", a_integer, "is", typeof a_integer)

// Defining a string variable: a_string
const a_string = "This is a string"
console.log(a_string)

// For loop
const other_values = [true, undefined, null]
for (let value of other_values) {
    console.log("The type of", value, "is", typeof value)
}