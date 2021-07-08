const express = require("express");
const app = express();

const bodyparser = require('body-parser');
//const http = require('http'); 


// DATABASE CONNECTION

const OrientDB=require('orientdb-rest-api');

const db = new OrientDB({
  user: 'root',
  password: 'root',
  host: 'http://localhost:2480',
  database: 'db'
})


//GET ACCOUNT INFO
app.get('/api/accountinfo/get',(req,res) => {
  db.connect().then(async ()=>{
    const result=await db.query('select * from accounts')
    console.log(result)
      res.send(result);
    
  }).catch(err=>{
    console.error(err.message)
  })
})
//CREATE A VERTEX
app.get('/api/createAcount',(req,res)=>{
  db.connect().then(async ()=>{ 
  rss=await db.command("INSERT INTO accountinfo (name, address, nationality, age, amount, accountno, created) VALUES ('TTT', 'lahore', 'pakistan', '31', '12340', '808080','12/02/2021')")
  res.send("Data is inserted"); 
  }).catch(err=>{
  console.error(err.message) 
  }) 
  } 
  );
  
  //UPDATE ACCOUNT INFO
app.put('/api/accountinfo/put',(req,res) => {
  db.connect().then(async ()=>{
    const result=await db.command('Insert into accounts set name = "king",amount = 233, address= "Usmfdfefefeanffefe", nationality= "Ataahammefefari", created = "232323", id ="1111", age=25 ');
    console.log(result)
      //res.send(result);
    
  }).catch(err=>{
    console.error(err.message)
  })
})




db.on('error', function(err) {
    console.log("Not connected");
});





//listening
app.listen(3000);
