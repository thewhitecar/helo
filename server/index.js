const express = require('express')
const massive = require('massive')
const bodyParser = require('body-parser')
require('dotenv').config()
const session = require('express-session')
const app = express();
const port = process.env.PORT || 4000;
const user = require('./userController');

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}))

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB Connected Successfully')
})

app.use(bodyParser.json())



app.post('/api/user', user.register)
app.post('/api/login', user.login)
app.post('/api/auth/logout', (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
})




app.listen(port, () => {
    console.log("listening on port : ", port)
})