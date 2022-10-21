const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");

//prepare game to recieve user input, and write to the server
setupInput(connect());