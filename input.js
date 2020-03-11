/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
//function to handle input (establish UI) 
  //allow CTRL+C to exit game

  const handleUserInput = (input) => {
    if (input === '\u0003') process.exit();
  }
  const setupInput = function() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', handleUserInput);
    return stdin;
  }
  
module.exports = setupInput;