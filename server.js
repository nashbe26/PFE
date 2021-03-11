
const express = require('express')
const app = express()
const port = 3000

const addPost = require('./routes/addPost')
const addUser = require('./routes/addUser')

const mongoose = require('mongoose');

const io = require('socket.io')

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.set('view engine','ejs')
const server = app.listen(3000,()=>{
    console.log('server work on port 3000')
})

mongoose.connect('mongodb+srv://nashbe:1234@cluster0.ixjnz.mongodb.net/users?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true  },server)
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/',addPost)
app.use('/',addUser)

// io.on('connection', function (socket) {
//     socket.on( 'new_notification', function( data ) {
//       console.log(data.title,data.message);
//       io.sockets.emit( 'show_notification', { 
//         title: data.title, 
//         message: data.message, 
//         icon: data.icon, 
//       });
//     });
//   });

