const argument1 = "foo";
const argument2 = "bar";

function argument(params) {
  if (params === null || params === undefined) {
    console.log("No Argument");
  } else if (params === argument1) {
    console.log("Argument found");
  } else {
    console.log("Arguments found");
  }
}
argument(argument2);
