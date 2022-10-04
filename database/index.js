const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useUnifiedTopology: true, useNewUrlParser: true});

let repoSchema = mongoose.Schema({
  Repo_id: Number,
  Repo_Name: String,
  Repo_url: String,
  Owner_login: String,
  Owner_img: String,
  Stargazers_count: Number,
  Watchers_count: Number,
  Forks: Number,
  Date: {type: Date, default: Date.now}
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoData, callback) => {
  repoData.forEach((rpo) => {
    const filter = { 'Repo_id': rpo.Repo_id }
    const currentRepo = new Repo(rpo);
    Repo.findOneAndUpdate(filter, rpo, {upsert: true}, (err, doc) => {
      if (err) { console.log(err) }
      else { console.log('YOUDIDIT!!!!!');}
    })

  });

  getTopForks((err, results) => {
    if (err) { callback(err, null) }
    else {
      console.log('results', results);
      callback(null, results)}
  })
  return;
};

const getTopForks = (callback) => {
  Repo.find().sort({ Forks: 'desc' }).limit(25).exec((err, docs) => {
    if (err) { callback(err, null) }
    else { callback(null, docs) }
  });

}

module.exports.save = save;
module.exports.getTopForks = getTopForks;