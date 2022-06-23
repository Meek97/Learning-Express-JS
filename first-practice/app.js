//declare require statements
const express = require('express');
const path = require('path');

//declare constants
const app = express();
const port = 3000;

//declare views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//declare routers
const indexRouter = require('./routes/index');

//include the public directory in our web server
app.use(express.static(path.join(__dirname, 'public')));

//set app routers
app.use('/',indexRouter);



app.get('/', function(request,response){
	response.send('welcome to ExpressJS');
});

app.listen(port, function(){
	console.log('server started');
});