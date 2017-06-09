/**
 * Created by shubham on 9/6/17.
 */

var express = require('express');
var app = express();

const port = process.env.PORT||3000;

app.use(express.static(__dirname+'/public'));

var nameRouter = require('./src/routers/nameRouter')();

app.use('/Names',nameRouter);
app.listen(port,function () {
   console.log("Server running on port "+ port);
});

