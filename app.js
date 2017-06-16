/**
 * Created by shubham on 9/6/17.
 */

var express = require('express');
var app = express();

const port = process.env.PORT||3010;

app.use(express.static(__dirname+'/public'));

//human data
var nameRouter = require('./src/api/humanData/routers/nameRouter')();
var emailRouter = require('./src/api/humanData/routers/emailRouter')();
var dateRouter = require('./src/api/humanData/routers/dateRouter')();
var companyRouter = require('./src/api/humanData/routers/companyRouter')();
var phoneRouter = require('./src/api/humanData/routers/phoneRouter')();

app.use('/api/names',nameRouter);
app.use('/api/emails',emailRouter);
app.use('/api/dates',dateRouter);
app.use('/api/companies',companyRouter);
app.use('/api/phone',phoneRouter);

//geo data
var countryRouter = require('./src/api/geoData/routers/countryRouter')();
var latlngRouter = require('./src/api/geoData/routers/latlngRouter')();


app.use('/api/countries',countryRouter);
app.use('/api/latlng',latlngRouter);

//credit card data
var creditCardRouter = require('./src/api/creditCard/routers/creditCardRouter')();
var cvvRouter = require('./src/api/creditCard/routers/cvvRouter')();

app.use('/api/creditCard',creditCardRouter);
app.use('/api/cvv',cvvRouter);

//text data
var loremIpsumRouter = require('./src/api/textData/routers/loremIpsumRouter')();

app.use('/api/loremIpsum',loremIpsumRouter);




app.listen(port,function () {
   console.log("Server running on port "+ port);
});

