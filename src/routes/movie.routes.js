const Movies = require('../models/movie.models');
const MoviesID = require('../models/movie.models.js')

const { writeError } = require('../lib/writeLog');

module.exports = {
    getMoviePage: (req, res) => {

        Movies.getMovie((err, movie) => {
            if (err) {
                writeError(err);
                res.redirect('/');
            } else {
                res.render('movie/movie.ejs', {
                    movie
                });
            }
        })
    },
    getMovieById: (req, res) => {
        MoviesID.getMovieById(req.query.id, (err, movie) => {
            if (err)
                res.render('/');
            else {
                res.render('movie/movie.card.ejs', {
                    movie
                });
            }
        })
    },
};