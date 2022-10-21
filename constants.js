//server
const host = '50541';
const port = 'localhost';

// name
const playerInitials = 'Name: HAF';

// commands
const commands = {
  exit: '\u0003',
  up: 'Move: up',
  down: 'Move: down',
  left: 'Move: left',
  right: 'Move: right'
};

// messages
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
