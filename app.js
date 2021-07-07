const express = require("express");
const app = express();
//const http = require('http'); 


//IMPORT ROUTES
//const accountinfoRoute = require('./routes/accountinfo');

//app.use('/accountinfo',accountinfoRoute);



// MIDDLEWARES
/*app.use('/accountinfo',()=> {
    console.log("This is a middleware.");
});




//ROUTES
app.get('/',(req,res)=>{
  res.send('We are on home');
}
);
*/

// DATABASE CONNECTION

const OrientDB=require('orientdb-rest-api');

const db = new OrientDB({
  user: 'root',
  password: 'root',
  host: 'http://localhost:2480',
  database: 'db',
})

db.connect().then(async ()=>{
  const result=await db.query('select * from accounts')
  console.log(result)
  app.get('/accountinfo',(req,res)=>{
    res.send(result);
  }
  );
}).catch(err=>{
  console.error(err.message)
})




db.on('error', function(err) {
    console.log("Not connected");
});



//const config=require('./config/local');
//const db1=new OrientDB(config);



//listening
app.listen(3000);
