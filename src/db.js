const mysql = require("mysql2/promise")

async function connect(){
    const connection = await mysql.createConnection("mysql://root:root@localhost:3306/icolabora");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}


