/**
 * Created by lenovo on 2016/6/4.
 */

function index(req, res, next){
    res.render('user/login/index.html')
}

function login(req, res, next){
    res.render('user/login.html')
}

function logout(req, res, next){
    res.render('user/register.html')
}

module.exports = {
    index: index,
    login: login,
    logout: logout
}