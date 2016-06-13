/**
 * Created by lenovo on 2016/6/4.
 */

function index(req, res, next){
    res.render('user/register/index.html')
}

function register(req, res, next){

}

module.exports = {
    index: index,
    register: register
}