const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const MongoClient = require('mongodb').MongoClient;
// Fill in URL to mongodb+srv below:
//const uri = "mongodb+srv://username:password@examplecluster.mongodb.net/test?retryWrites=true;"
const client = new MongoClient(uri, { useNewUrlParser: true });

let db;

client.connect( (err, database) => {
  db = database;
  app.listen(port, () => console.log(`Listening on port ${port}`))
});

app.get('/getuserdata', (req, res) => {
  const collection = db.db("users").collection("info");
  collection.find().toArray((err, docs) => {
    const jsonDOCS = JSON.stringify(docs)
    console.log(docs)
    console.log(jsonDOCS);
    res.send(jsonDOCS);
  })
});

app.post('/submit', (req, res) => {

  const name = req.body.name
  const age = req.body.age
  const color = req.body.color
  const userObj= {"name": name, "age": age, "color": color };

  db.db("users").collection("info").insertOne(userObj);

  res.sendStatus(200)
})