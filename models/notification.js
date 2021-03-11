const mongoose = require('mongoose');
const {Schema} = mongoose;

const newNotification = new Schema({
    title:{
        type:String,
        required:true
    },
    posts:{type:mongoose.Schema.Types.ObjectId,ref:'posts'},
    users:{type:mongoose.Schema.Types.ObjectId,ref:'users'}
})
const Notification = mongoose.model('Notification',newNotification)

module.exports = Notification;