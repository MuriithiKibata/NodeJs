const express = require('express');
const app = express();
const people = require('./routes/people-api')
const auth = require('./routes/auth');
//parser form data
var bodyParser = require('body-parser');
// parse json data
app.use(bodyParser.json()); 

app.use('/api/people', people)

app.use('/login', auth)


app.listen(3000, () => {
    console.log('listening on port 3000');
})