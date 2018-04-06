const express = require('express');
const bodyParser = require('body-parser');
const con = require('./controller')
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance =>{
    app.set('db', dbInstance)
});

app.get(`/api/inventory`, con.read)
app.post('/api/inventory', con.create)


app.listen(3005, () => console.log("Listening on 3005"));