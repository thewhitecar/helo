const express = require('express')
const massive = require('massive')
const bodyParser = require('body-parser')
require('dotenv').config()
const session = require('express-session')
const app = express();
const port = process.env.PORT || 4000;
const user = require('./userController');
const post = require('./postController')

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false
}))

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB Connected Successfully')
})

app.use(bodyParser.json())


// app.get('api/posts/:id', post.getAll)



app.post('/api/user', user.register)
app.post('/api/login', user.login)
app.post('/api/auth/logout', (req, res) => {
    const {session} = req;
    session.destroy();
    res.status(200).send(req.session)
})

app.get('api/auth/me', user.findByUserId)


app.listen(port, () => {
    console.log("listening on port : ", port)
})