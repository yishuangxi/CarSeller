/**
 * Created by lenovo on 2016/6/4.
 */

function index(req, res, next){
    res.render('user/user/index.html')
}

function modifyPassword(req, res, next){

}

function modifyPhone(req, res, next){

}

module.exports = {
    index: index,
    modifyPassword: modifyPassword,
    modifyPhone: modifyPhone
}