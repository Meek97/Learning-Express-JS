var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const mdbURI = 'mongodb://192.168.0.2:27017/discord';

const indexRouter = require('./routes/index');
const channelsRouter = require('./routes/channels');
const responseRouter = require('./routes/responses');

var app = express();
mongoose.connect(mdbURI, {useNewUrlParser:true, useUnifiedTopology:true});
const mongoDB = mongoose.connection;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/channels', channelsRouter);
app.use('/responses', responseRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
mongoDB.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = app;
