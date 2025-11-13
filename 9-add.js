// Get the first and second arguments
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Convert them to integers
const a = parseInt(arg1, 10);
const b = parseInt(arg2, 10);

// Define the add function
function add(x, y) {
  return x + y;
}

// Print the result
console.log(add(a, b));
