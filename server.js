const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Connect the DB
const db = require('./config/keys.js').mongoURI;
// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log("Connection made successfully :D"))
    .catch(err => console.log(err));

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Server live at port ${port}`));