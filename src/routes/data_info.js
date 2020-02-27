const PlaceholderID = require('../models/db_data')

module.exports = {
    getPlaceholdersById: (req, res) => {
        PlaceholderID.getPlaceholderById(req.query.id, (err, placeholder) => {
            if (err)
                res.render('/');
            else {
                res.render('placeholder/data_card.ejs', {
                    pesci
                });
            }
        })
    },
};