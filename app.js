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
//UPDATE A VERTEX
app.put('/api/accountinfo/update',(req,res) => {
  db.connect().then(async ()=>{
    //const result=await db.command('Insert into accounts set name = "king",amount = "233", address= "Usmfdfefefeanffefe", nationality= "Ataahammefefari", created = "232323", id ="1111", age=25 ');
    const result=await db.command('UPDATE accounts SET name = "taham",amount = "23355", address= "FEFEUsmfdfefefeanffefe", nationality= "Ataahammefefari", created = "23232223", id ="111331", age=30 WHERE @rid=#34:0');
    console.log(result)
      //res.send(result);
    
  }).catch(err=>{
    console.error(err.message)
  })
})
  
  //ADD A NEW VERTEX
app.put('/api/accountinfo/add',(req,res) => {
  db.connect().then(async ()=>{
    const result=await db.command('Insert into accounts set name = "aoubhfiusgvfvddvwd",amount = "233", address= "Usmfdfefefeanffefe", nationality= "Ataahammefefari", created = "232323", id ="1111", age=25 ');
   // const result=await db.command('UPDATE accounts SET name = "king",amount = 233, address= "Usmfdfefefeanffefe", nationality= "Ataahammefefari", created = "232323", id ="1111", age=25 WHERE @rid=#34:0');
    console.log(result)
      //res.send(result);
    
  }).catch(err=>{
    console.error(err.message)
  })
})
//DELETE A VERTEX
app.delete('/api/accountinfo/delete',(req,res) => {
  db.connect().then(async ()=>{
    //const result=await db.command('Insert into accounts set name = "king",amount = "233", address= "Usmfdfefefeanffefe", nationality= "Ataahammefefari", created = "232323", id ="1111", age=25 ');
    const result=await db.command('DELETE FROM accounts WHERE name="potato"');
    console.log(result)
      res.send("DELETED");
    
  }).catch(err=>{
    console.error(err.message)
  })
})



db.on('error', function(err) {
    console.log("Not connected");
});





//listening
app.listen(3000);
