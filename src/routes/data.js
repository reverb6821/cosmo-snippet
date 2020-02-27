const Placeholder = require('../models/db_data');

const {
    writeError
} = require('../lib/writeLog');

module.exports = {
    getPlaceholderPage: (req, res) => {

        Placeholders.getPlaceholder((err, Placeholders) => {
            if (err) {
                writeError(err);
                res.redirect('/');
            } else {
                res.render('placeholder/data.ejs', {
                    pesci
                });
            }
        })
    },
};