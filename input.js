let conn;

// setup interface to handle user input from stdin
const setupInput = function(connection) {
  conn = connection;
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const moveUp = 'w';
const moveDown = 's';
const moveLeft = 'a';
const moveRight = 'd';

const handleUserInput = function(key) {
  if (key === '\u0003') { //'\x03' also works
    process.exit();
  } // exit with ctrl + c
  if (key === moveUp) {
    conn.write('Move: up');
  } // W
  if (key === moveDown) {
    conn.write('Move: down');
  } // S
  if (key === moveLeft) {
    conn.write('Move: left');
  } // A
  if (key === moveRight) {
    conn.write('Move: right');
  } // D
  //Messages
  if (key === '1') {
    conn.write('Say: NOM NOM NOM'); //canneed msg
  }
};

//logs user input
module.exports = {
  setupInput
};