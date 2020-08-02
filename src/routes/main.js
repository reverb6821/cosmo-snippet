const express = require('express');
const router = express.Router();
//const passport = require('passport');

// root route
router.get('/', function(req, res) {
    res.render('index');
});

// Export
module.exports = router;