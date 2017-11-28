


const friendsArr = require('../data/friends');
// const compatible = require('../../compatibility');



module.exports = app => {

  app.get('/api/friends', (req, res) => {
    res.json(friendsArr);
    // console.log(res);
  });

  app.post('/api/friends', (req, res) => {
    // console.log('requestScores = ');
    // console.log(req.body.scores[2]);
    let friend = {};
    let diffsList = [];

    console.log('req.body.scores = ' + req.body.scores);
    

    let i = 0;
    for (i; i < friendsArr.length; i++) {
      diffsList[i] = {
        friendName : friendsArr[i].name,
        friendPhoto : friendsArr[i].photo,
        compatDiff : calcCompatDiff(req.body.scores, friendsArr[i].scores)
      }
      // console.log('diffsList[' + i + '] = ' + diffsList[i].compatDiff);
      // console.log('diffsListName = ' + diffsList[i].friendName);
    }

    diffsList.sort((a,b) => a.compatDiff - b.compatDiff );
    // console.log('diffsList[0] = ' + diffsList[0].friendName);
    friend = diffsList[0];

    // console.log('Your Carl is ' + friend.friendName);
    friendsArr.push(req.body);
    res.send( friend );
  });

  const calcCompatDiff = (arrA, arrB) => {
    let compatDiff = 0;
    let i = 0;
    for  (i; i<10; i++) {
      compatDiff += Math.abs(arrA[i] - arrB[i]);
    }
    return compatDiff;
  };

};
