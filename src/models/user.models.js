  
const sql = require('./db.models');

const User = {
  findById: (userId, result) => {
    sql.query(
      `SELECT * from user WHERE id=${userId}`, // *DB's query to retrieve user with the id
      (err, res) => {
        if (err) {
          console.log('error: ', err);
          result(err, null);
          return;
        } else if (res.length) {
          console.log('user not found ', res[0]);
          result(null, res[0]);
          return;
        } else {
          result({ kind: 'not_found' }, null);
        }
      }
    );
  },

  getAll: result => {
    sql.query(
      'SELECT * FROM fishes', // *DB's query to retrieve all users
      (err, res) => {
        if (err) {
          console.log('error: ', err);
          result(null, err);
          return;
        } else {
          console.log('user: ', res);
          result(null, res);
        }
      }
    );
  },
};

module.exports = User;