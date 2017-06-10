/**
 * Created by shubham on 9/6/17.
 */

var express = require('express');
var app = express();

const port = process.env.PORT||3010;

app.use(express.static(__dirname+'/public'));

var nameRouter = require('./src/api/humanData/routers/nameRouter')();
var emailRouter = require('./src/api/humanData/routers/emailRouter')();
var dateRouter = require('./src/api/humanData/routers/dateRouter')();

//human data
app.use('/api/names',nameRouter);
app.use('/api/emails',emailRouter);
app.use('/api/dates',dateRouter);


app.listen(port,function () {
   console.log("Server running on port "+ port);
});

