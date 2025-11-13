// Get the first argument
const arg = process.argv[2];

// Convert it to an integer
const n = parseInt(arg, 10);

// Recursive factorial function
function factorial(num) {
  if (isNaN(num) || num <= 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

// Print the result
console.log(factorial(n));
