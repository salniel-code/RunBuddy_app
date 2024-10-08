const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const path = require('path');

// Konfiguerar så vi har environment-variabler i dotenv
require("dotenv").config();

// Skapa instans av express-bibliotek
const app = express();

// Middleware
// Gör att vi kan parse json
app.use(cors());
app.use(express.json());


// Anslutning till databsen
const mongooseUrl = process.env.ATLAS_URI;
mongoose.connect(mongooseUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  const connection = mongoose.connection;
  connection.once('open', function (){
      console.log("Koppling till databasen lyckades");
  
  })
  
  
const runsRouter = require('./routes/runs');


app.use('/runs', runsRouter);

 if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*', (req, res)=>{
 res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  });
} 

// Port för anslutning
const port = process. env. PORT || 5000;

// Starta server på porten (3000)
app.listen(port, () => {
  console.log("Servern är startat på port " + port);
});