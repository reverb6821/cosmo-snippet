const Users = require('../models/user.models');

exports.findId = (req, res) => {
  Users.findById(req.query.id, (err, user) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `user WITH THE ID ${req.query.id} NOT FOUND`, // * if the ID is wrong, error
        });
      } else {
        res.status(500).send({
          message: `ERROR RETRIEVING THE user WITH THE ID - ${req.query.id}`, // *Retrieve Error
        });
      }
    } else {   
      res.render('user-views/user-card', {user}) // *When the user with choosen ID is find, retrieve the page & export the array
    }
  });
};

exports.findAll = (req, res) => {
  Users.getAll((err, users) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Error retrieving the list.',
      });
    } else {
      res.render('fish-views/users-list.ejs', { users }) // *When all the user are found, retrieve the page & export the array
    }
  });
};