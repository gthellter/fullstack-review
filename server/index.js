const express = require('express');
//import githubHelper
const gitHub = require('../helpers/github.js');
//import Mongoose db connection
const db = require('../database/index.js');
//middleware
const cors = require('cors');


let app = express();

app.use(cors());
app.use(express.json())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  var username = req.body.username;
  gitHub.getReposByUsername(username, (err, results) => {
    if (err) { console.log('On GetReposByUsername: ', err) }
    else {
      db.save(results, (err, results) => {
        if (err) { console.log('On Save: ', err) }
        else {
          console.log(results);
          res.json(results);
        }
      })
    }
  })
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  db.getTopForks((err, results) => {
    if (err) { console.log('Getting TopForks', err)
  } else {
    res.send(results);
  }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

