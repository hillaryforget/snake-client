const net = require('net');
const { host, port, playerInitials } = require('./constants');

//establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: host,
    port: port,
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');

  //event handler sends msg to player to notify them of connection
  conn.on('connect', () =>
    console.log('Successfully connected to game server')
  );
  conn.write(playerInitials);

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect
};