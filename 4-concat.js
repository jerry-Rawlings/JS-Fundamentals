// Get the arguments passed to the script (after 'node' and script name)
const args = process.argv.slice(2);

// Access the first two arguments
const firstArg = args[0];
const secondArg = args[1];

// Print them in the requested format
console.log(firstArg + " is " + secondArg);
