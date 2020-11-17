// Import what we need
const express = require('express'); // First Express to then use Router
const client = require('../../modals/Client');
//const client = require('../../modals/Client');
const router = express.Router();

// Client Modal -- We Call him here
const Client = require('../../modals/Client');

// GET the clients from the db
// Show all of the clients -- Public
router.get('/', (req, res) => {
    Client.find()
        .sort({ date: -1})
        .then(client => res.json(client));
});

// POST the clients from the db
router.post('/', (req, res) => {
    const newClient = new Client ({
        name: req.body.name,
        dateSend: req.body.dateSend,
        dateIn: req.body.dateIn,
        dateOut: req.body.dateOut,
        numberPersons: req.body.numberPersons,
        typeRoom: req.body.numberPersons,
        email: req.body.email
    });
    newClient.save().then(client => res.json(client));
});
/* POST EXAMPLE -- POSTY :D
{
    "name": "Walter White",
    "dateIn": "2020-11-10",
    "dateOut": "2020-11-15",
    "numberPersons": "3",
    "typeRoom": "King Size + Pool",
    "email": "WalterisCool@gmail.com"
}
*/
// DELETE the clients from the db
router.delete('/:id', (req, res) =>{
    Client.findById(req.params.id)
        .then(client => client.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

// Export 
module.exports = router;