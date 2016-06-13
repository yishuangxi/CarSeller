/**
 * Created by lenovo on 2016/5/6.
 */
function index(req, res, err){
    res.render('index/index.html', { title: 'Express' });
}

module.exports = {
    index: index
}