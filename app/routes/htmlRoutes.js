
const path = require('path');

module.exports = app => {

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/home.html'));
    console.log(__dirname);
  });

  app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/survey.html'))
  });

  // Catch-all route to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/home.html'));
  });

};
