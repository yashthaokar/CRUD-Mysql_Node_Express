const mysql= require('mysql2')

const mysqlConnection= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"Yash@123",
    database:'crudnodemysql'
})
mysqlConnection.connect(err=>{
    if(err){
        console.log("error in connection")
    }
    else{
        console.log('Db is connected succcessfully')
    }
})
module.exports=mysqlConnection