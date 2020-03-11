const net = require('net');
const { IP, PORT, NAME } = require('./constants');


/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  //get statement from server and print
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  //when connection established print statement
  conn.on('connect', () => {
    console.log("Successfully connected to game server")
  });
  //send server name for user's snake
  conn.on('connect', () => {
    conn.write("Name: " + NAME)
  });
  return conn;
}

module.exports = connect;
