const express = require("express");
const morgan = require("morgan");


const app = express();

app.use(morgan('combined'))

const bodyparser = require('body-parser');

// MIDDLEWARE

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use(allowCrossDomain);

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
 app.route('/api/accountinfo/add').post((req,res) => {
   db.connect().then(async ()=>{               
     const result=await db.command('Insert into accounts set name = "khan",amount = "233", address= "Usmfdfefefeanffefe", nationality= "Ataahammefefari", created = "12", id ="long", age=23 ');
    // const result=await db.command('UPDATE accounts SET name = "king",amount = 233, address= "Usmfdfefefeanffefe", nationality= "Ataahammefefari", created = "232323", id ="1111", age=25 WHERE @rid=#34:0');
    console.log(result)
     res.send('inserted');                           
    
   }).catch(err=>{
     console.error(err.message)
   })
 })

 http://localhost:3100/createAcount?accountName=aabb@islamabad@pakistan@56@1200@9999@22/01/2020
 app.route('/api/createAcount').post((req,res)=>{                        
                        
 }                                                                                       
 );                  
       

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


app.post("/hello", (req, res) => {
 res.send("done");
 console.log("hello");  
})


//listening
app.listen(3000);
console.log("Listening on 3000...");
