const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.0.203',
    port: 50541
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
    conn.write("Name: KJG")
  });
  return conn;
}

module.exports = connect;
