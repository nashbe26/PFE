const mongoose = require('mongoose');
const {Schema} = mongoose;

const newUsers = new Schema({
    nom:{
        type:String,
        required:true
    },
    prenom:{
        type:String,
        required:true
    },
    posts:[
        {type:mongoose.Schema.Types.ObjectId,ref:'posts'}
    ],
    notification:[
        {type:mongoose.Schema.Types.ObjectId,ref:'notfications'}
    ]
})

const Users = mongoose.model('User',newUsers)

module.exports  = Users;