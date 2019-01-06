const express = require('express');
const app = express();
const socket = require('socket.io');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const register = require('./routes/register');
const login = require('./routes/login');
const auth = require('./auth');
const test =require('./routes/test');

const port = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/ChatApp',{useNewUrlParser: true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/register',register);
app.use('/login',login);
app.use('/test',passport.authenticate('jwt',{session:false}),test);

app.get('/',(req,res)=>{
    res.send("Hello");
});

const server = http.createServer(app);
const io = socket(server);
io.on('connection', socket => {
    console.log('User connected')

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

server.listen(port,()=>{
    console.log(`listening at port ${port}`);
});

