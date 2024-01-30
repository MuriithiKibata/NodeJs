const {logger} = require('./logger')
const auth = require('./authorize');
const morgan = require('morgan');

app.use([auth, logger]);

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send("Home page")
})


app.get('/about', (req, res) => {
    res.send("About")
})

app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send("Items");
})