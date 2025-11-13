const args = process.argv.slice(2);
const firstArg = args[0]; // This will be undefined if no argument is passed

if (firstArg === undefined) {
  console.log("No argument");
} else {
  console.log(firstArg);
}
