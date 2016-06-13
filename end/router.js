/**
 * Created by qiubai on 2016/4/21.
 */
var express = require('express')
var router = express.Router()
var IndexHandler = require('./views/index/handler')
var LoginHandler = require('./views/user/login')
var RegisterHandler = require('./views/user/register')
var UserHandler = require('./views/user/user')
var authMiddleware = require('./middleware/auth')
/*****
 * homeÄ£¿é
 * */
router.get('/', IndexHandler.index)


/**
 * userÄ£¿é
 * **/
router.get('/login', LoginHandler.index)
router.post('/login', LoginHandler.login)
router.get('/logout', LoginHandler.logout)

router.get('/register', RegisterHandler.index)
router.post('/register', RegisterHandler.register)

router.get('/user/:id', UserHandler.index)
router.put('/user/modify/password', UserHandler.modifyPassword)
router.put('/user/modify/phone', UserHandler.modifyPhone)



module.exports = router;
