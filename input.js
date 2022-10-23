const { commands } = require('./constants');

let conn;

//setup interface to handle user input from stdin
const setupInput = function(connection) {
  conn = connection;
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') { //'\x03' also works
    process.exit();
  } //exit with ctrl + c
  if (key === commands.up) {
    conn.write('Move: up');
  } //w
  if (key === commands.down) {
    conn.write('Move: down');
  } //s
  if (key === commands.left) {
    conn.write('Move: left');
  } //a
  if (key === commands.right) {
    conn.write('Move: right');
  } //d
  //messages
  if (key === commands.banter) {
    conn.write('Say: NOM NOM NOM'); //canned msg
  }
};

//logs user input
module.exports = {
  setupInput
};