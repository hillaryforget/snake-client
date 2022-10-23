//server
const port = 50541;
const host = 'localhost';

//name
const playerInitials = 'Name: HAF';

//commands
const commands = {
  exit: '\u0003',
  up: 'w',
  down: 's',
  left: 'a',
  right: 'd',
  banter: '1'
};

//messages
const messages = {
  banter: 'NOM NOM NOM'
};

module.exports = {
  host,
  port,
  playerInitials,
  commands,
  messages
};
