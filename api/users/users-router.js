const router = require('express').Router();

const bcrypt = require('bcryptjs');
const Users = require('./users-model.js');
const restricted = require('../../middleware/authentication.js');

router.get('/', restricted, (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/:id', restricted, (req, res) => {
    Users.findById(req.params.id)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    let changes = req.body;
    if (!changes.firstName) {
        res.status(422).json({message: "Missing Name."})
    }
    if (!changes.lastName) {
        res.status(422).json({message: "Missing Last Name."})
    }
    if (!changes.email) {
        res.status(422).json({message: "Missing Email."})
    }
    if (!changes.password) {
        res.status(422).json({message: "Missing Password."})
    }

    const hash = bcrypt.hashSync(changes.password, 10);
    changes.password = hash

    Users.update(id, changes)
    .then(updated => {
        if (updated) {
            res.status(200).json({success: true, updated})
        } else {
            res.status(404).json({message: "This user could not be updated."})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.delete('/:id', restricted, (req, res) => {
    Users.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: "This user has been removed from the database."})
        } else {
            res.status(404).json({message: "This user does not exist."})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;