const express = require('express');
const router = express.Router();

const addUserController = require('../controllers/addUsersController')

router.post('/addUser',addUserController.addUser)
router.get('/showUser',addUserController.showUser)

module.exports  = router;
