const mysql = require("mysql")

var connection;
if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "p2d0untihotgr5f6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,

    // Your username
    user: "yzw4lerca1yosil0",

    // Your password
    password: "wkkfa3bf6tboyybf",
    database: "burgers_db"
  });
}



// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;