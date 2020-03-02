const mysql = require ("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"root",//**my password??
    database:"burgerbase"
})
connnection.connect(function(err){if(err){
    console.log("err"+err.stack)
    return;
}console.log("connected as"+connection.threadId)

})
module.exports=connection 