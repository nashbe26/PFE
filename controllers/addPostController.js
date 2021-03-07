const Posts = require('../models/post');
const Users = require('../models/users');

const socket = require('socket.io')

const addPost =  async (req,res)=>{

    const posts = {
        title:req.body.title,
        content:req.body.content,
        user:"6040f32b56db16314c1a4167"
    }

    console.log("6040f32b56db16314c1a4167")
    
    const findUser = await Users.findById("6040f32b56db16314c1a4167")

    console.log(findUser.posts)
    const addPost = await Posts.create(posts)
    .then(async (resu)=>{
     
        findUser.posts.push(resu._id)
        const addUser = await Users.create(findUser)
        res.redirect('addPost')
    }
        
    )
    .catch((err)=>{
        console.log(err)
    })
}
const showPostById = async (req,res)=>{
    const {id} = req.params
    console.log(id)
    const retreivePostById = await Posts.findById(id).populate({ path:'user' , model: Users })

    
    res.send(retreivePostById);
 
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
    retPsot
}