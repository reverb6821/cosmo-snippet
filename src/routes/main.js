module.exports = (app) => {
  //! Home Routes
  app.get('/', (req, res) => {
    res.render('index');
  });

  // !db - routes
  const user = require('../controllers/user.controller');
  app.get('/user-tab', user.findId); // *Find User with specified ID
  app.get('/user-tables', user.findAll, (req, res)=> { // *retrieve all users's list
    res.render('/user-views/users-list'); // *where users's list should be viewed
  });

  // !404 - Leave it for last, otherwise you will have problems with page redirection
  app.use((req, res, next)=> {
    res.status(404).render('404');
  }); 
};
