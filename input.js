//exit with ctrl + C
const handleUserInput = function(data) {
  console.log({data});
  if (data === '\x03') {
    console.log("bye bye");
    process.exit();
  }
};

// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

//logs user input
module.exports = {
  setupInput
};