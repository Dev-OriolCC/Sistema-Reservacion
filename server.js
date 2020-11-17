const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Connect to Express and BodyParser 
const app = express();

app.use(bodyParser.json());

// Connect the DB
const db = require('./config/keys.js').mongoURI;
// Connect to mongo
mongoose        // All of this is new to connect
    .connect(db,  {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
    .then(() => console.log("Connection made successfully :D"))
    .catch(err => console.log(err));

// Here go all of our Routes :D
app.use('/api/client', require('./routes/api/client')) // Conection to clients object 



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server live at port ${port}`)); 