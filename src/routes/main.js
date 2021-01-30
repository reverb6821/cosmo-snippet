module.exports = (app) => {
  //! Home Routes
  app.get('/', function (req, res) {
    res.render('index');
  });
};
