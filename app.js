/**
 * Created by shubham on 9/6/17.
 */

var express = require('express');
var app = express();

const port = process.env.PORT||3010;

app.use(express.static(__dirname+'/public'));

var nameRouter = require('./src/routers/nameRouter')();
var emailRouter = require('./src/routers/emailRouter')();
var dateRouter = require('./src/routers/dateRouter')();

app.use('/api/names',nameRouter);
app.use('/api/emails',emailRouter);
app.use('/api/date',dateRouter);

app.listen(port,function () {
   console.log("Server running on port "+ port);
});

