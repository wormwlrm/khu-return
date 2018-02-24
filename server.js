var express = require('express');
var app = express();
var router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public')); // 정적인 파일 서비스

var server = app.listen(3001, function(){
    console.log("Express server has started on port 3001")
});
