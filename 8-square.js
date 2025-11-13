// Get the first argument
const arg = process.argv[2];

// Convert it to an integer
const size = parseInt(arg, 10);

// Check if the argument is missing or invalid
if (isNaN(size) || size <= 0) {
  console.log("Missing size");
} else {
  let i = 0;
  while (i < size) {
    console.log("X".repeat(size));
    i++;
  }
}
