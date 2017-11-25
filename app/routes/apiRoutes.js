


const friendsData = require('../data/friends');



module.exports = app => {

  app.get('/api/friends', (req, res) => {
    res.json(friendsData);
    // console.log(res);
  });

  app.post('/api/friends', (req, res) => {
    console.log('Redirecting ...');
    console.log(req);
  });

};
