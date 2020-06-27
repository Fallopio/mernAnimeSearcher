const express = require("express");
const app = express();
const server = require("http").Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')
const jwt = require("jsonwebtoken");

app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listen on *: ${PORT}`));

mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb+srv://Cyril:inglorion9312@simplechat-krolc.mongodb.net/anime?retryWrites=true&w=majority',
  { useNewUrlParser: true, keepAlive: true, keepAliveInitialDelay: 300000 })
  .catch(error => console.log(error));

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/SimpleAnimeSearch*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const constants = require('./constants');
const verify = require('./config/auth');
let User = require('./models/userModel');
let Comment = require('./models/commentsModel');
let UserStorage = require('./models/userStorageModel');



app.post('/createUser', async (req, res) => {
  let existing = await User.find({ user: req.body.user })
  if (existing.length === 0) {
    let user = new User({ user: req.body.user, pw: req.body.pw });
    user.save();
    jwt.sign(req.body, constants.secretKey, (err, token) => {
      if (err) {
        res.sendStatus(500)
      }
      else {
        res.send({ token: token })
      }
    })
  }
  else {
    res.status(400).send({
      message: 'user exists'
    })
  }
})

app.get('/loginByToken', verify, (req, res) => {
  jwt.verify(req.token, constants.secretKey, (err) => {
    if (err) {
      res.sendStatus(403)
    }
    else {
      const userName = jwt.decode(req.token).user
      res.send({ userName: userName })
    }
  })
})

app.post('/loginByCred', async (req, res) => {
  let found = await User.find({ user: req.body.user, pw: req.body.pw })
  if (found.length === 1) {
    jwt.sign(req.body, constants.secretKey, (err, token) => {
      if (err) {
        res.sendStatus(500)
      }
      else {
        res.send({ token: token })
      }
    })
  }
  else {
    res.status(400).send({
      message: 'wrong password or username'
    })
  }
})

app.post('/comment', verify, (req, res) => {
  jwt.verify(req.token, constants.secretKey, (err) => {
    if (err) {
      res.status(403).send({
        message: 'not logged in'
      })
    }
    else {
      console.log(req.body.id)
      let comment = new Comment({ id: req.body.id, comment: req.body.comment, from: req.body.from })
      comment.save().then(res.sendStatus(200))

    }
  })
})

app.get('/getComments/:titleId', (req, res) => {
  Comment.find({ id: req.params.titleId }).then(data => res.send({ comments: data }))
})

app.post('/saveFavs', verify, (req, res) => {
  jwt.verify(req.token, constants.secretKey, async (err) => {
    if (err) {
      res.sendStatus(403)
    }
    else {
      const userName = jwt.decode(req.token).user
      let data = await User.find({ user: userName })
      userId = data[0]['_id']
      let storage = await UserStorage.find({ userId: userId })
      if (storage.length === 0) {
        storage = new UserStorage({
          userId: userId,
          favs: req.body.favs,
        })
        storage.save()
        res.sendStatus(200)
      }
      else {
        storage = storage[0]
        storage.favs = req.body.favs
        storage.save()
        res.sendStatus(200)
      }
    }
  })
})

app.get('/getMyFavs', verify, (req, res) => {
  jwt.verify(req.token, constants.secretKey, async (err) => {
    if (err) {
      res.sendStatus(403)
    }
    else {
      const userName = jwt.decode(req.token).user
      let data = await User.find({ user: userName })
      userId = data[0]['_id']
      let storage = await UserStorage.find({ userId: userId })
      res.send({
        favs: storage[0].favs,
      })
    }
  })
})