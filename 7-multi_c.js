// Get the first argument
const arg = process.argv[2];

// Convert to integer
const x = parseInt(arg, 10);

// If argument is missing or not a number
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  while (i < x) {
    console.log("C is fun");
    i++;
  }
}
