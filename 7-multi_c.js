// Get the first argument
const arg = process.argv[2];

// Convert it to an integer
const x = parseInt(arg, 10);

// Check if the conversion is valid and positive
if (isNaN(x) || x <= 0) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  while (i < x) {
    console.log("C is fun");
    i++;
  }
}
