const net = require('net');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  //event handler sends msg to player to notify them of connection
  conn.on('connect', () =>
    console.log('Successfully connected to game server'));
  conn.write('Name: HAF');
  
  //callback moves snake up until ded
  /*setInterval(() => {
    conn.write('Move: up');
  }, 300);
  setTimeout(() => {
    conn.write('Move: left');
  }, 200);*/

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect
};

/*Movement Commands:
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left) */