const Posts = require('../models/post');
const Users = require('../models/users');

const Notification = require('../models/notification')

const addPost =  async (req,res)=>{

    const posts = {
        title:req.body.title,
        content:req.body.content,
        user:"6040f32b56db16314c1a4167",
        notfication:null
        
    }
    
    console.log("6040f32b56db16314c1a4167")
    
    const findUser = await Users.findById("6040f32b56db16314c1a4167")

    console.log(findUser.posts)
    const addPost = await Posts.create(posts)
    .then(async (resu)=>{
        const notfication = {
            title:req.body.title,
            posts:resu._id,
            users:"6040f32b56db16314c1a4167",
            
        }
        const addNotification = await Notification.create(notfication)
        .then(async (resu)=>{
            const findPost = await Posts.findById(resu._id)
            findPost.notfication =resu._id
            findUser.notification.push(resu._id)
            res.send(findUser);
            });
        findUser.posts.push(resu._id)
        const addUser = await Users.create(findUser)
  
    })
    .catch((err)=>{
        console.log(err)
    })
}
const showPostById = async (req,res)=>{
    const {id} = req.params
    console.log(id)
    const retreivePostById = await Posts.findById(id).populate({ path:'user' , model: Users })
    const retreiveNotfiById = await Notification.findById(id).populate({path:'users',model:Notification})
    
    res.send(retreivePostById,retreiveNotfiById);
 
}
const showUserNotification = async (req,res)=>{
    const {id} = req.params
    console.log(id)
    const retreiveNotfiById = await Notification.findById(id).populate({path:'users',model:Notification})
    res.send(retreiveNotfiById);
}
const retPsot= async (req,res)=>{
    const retreivePost = await Posts.find()
    .then((resu)=>{
        res.send(resu)
    }).catch(err=>{
        console.log(err);
    })  
}

module.exports={
    addPost,
    showPostById,
    retPsot,
    showUserNotification
}