// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
//function to handle input (establish UI) 
  //allow CTRL+C to exit game

const handleUserInput = (input) => {
  if (input === '\u0003') { 
    process.exit();
  } else if (input === 'w') {
    connection.write("Move: up"); 
  } else if (input === 'a') {
    connection.write("Move: left"); 
  } else if (input === 's') {
    connection.write("Move: down");
  } else if (input === 'd') connection.write("Move: right");
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};
  
module.exports = setupInput;