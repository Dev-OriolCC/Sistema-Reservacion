// Make the connection
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dateSend:{
        type: Date,
        default: Date.now
    },
    dateIn: {
        type: Date,
        required: true
    },
    dateOut: {
        type: Date,
        required: true
    },
    numberPersons: {
        type: Number,
        required: true
    },
    typeRoom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});
// Finally we export this
module.exports = Item = mongoose.model('item', ItemSchema);