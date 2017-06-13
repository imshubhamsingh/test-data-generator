/**
 * Created by shubham on 13/6/17.
 */

var express = require('express');
var creditCardRouter = express.Router();

var router = function () {
    var countryController = require('../controllers/latlngController')();
    creditCardRouter.route('/')
        .get(countryController.latitudelongitude);

    return creditCardRouter;
};

module.exports = router;