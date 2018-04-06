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

app.get('/api/inventory', con.read)
app.post('/api/inventory', con.create)
app.delete('/api/inventory/:id', con.delete)
app.put("/api/inventory/:id", con.update)

const port = process.env.PORT || 3005
app.listen(port, () => console.log(`Listening on ${port}`));