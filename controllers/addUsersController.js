const Users = require('../models/users');
const Posts = require('../models/post');

const addUser= async (req,res)=>{
    console.log(req.body);
    
    const addUsers = await Users.create(req.body)
    .then(results=>{
        res.send(results)
    })
    .catch(err=>{
        console.log(err)
    })
}
const showUser= async (req,res)=>{

    const retreiveUserById = await Users.find().populate({ path:'posts' , model: Posts })
  
    .then(async (results)=>{
    const retreivePostsById = await Posts.find(results._id)
    console.log(results)
    .then((results)=>{
        res.send(results)
    })
    .catch(err=>{
        console.log(err)
    })
    })
    .catch(err=>{
        console.log(err)
    })
    
}
  
module.exports={
    addUser,
    showUser
}