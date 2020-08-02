const mysql = require('mysql');
const { connection } = require('../../config/database');

module.exports = {

    // Get all Movies from db
    getMovie(callback) {
        const db = mysql.createConnection(connection);

        db.connect((err) => {
            if (err) {
                callback(err);
                db.end();
                return;
            }

            // execute query
            let query = "SELECT * FROM `movie` ORDER BY id ASC"; // query database to get all
            
            db.query(query, (err, result) => {
                if (err)
                    callback(err);
                else
                    callback(null, result);

                db.end();
            });

        });
    },
    // Get a Movie by the ID
    getMovieById(id, callback) {
        const db = mysql.createConnection(connection);

        db.connect((err) => {
            if (err) {
                callback(err);
                db.end();
                return;
            }

            // execute query
            let query = "SELECT * FROM movie WHERE id = " + id + ""; // query database to get all

            db.query(query, (err, result) => {
                if (err)
                    callback(err);
                else
                    callback(null, result);

                db.end();
            });

        });
    }
};