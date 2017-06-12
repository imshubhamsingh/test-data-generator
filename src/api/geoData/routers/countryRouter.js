/**
 * Created by shubham on 12/6/17.
 */

var express = require('express');
var countryRouter = express.Router();

var router = function () {
    var countryController = require('../controllers/countryController')();
    countryRouter.route('/')
        .get(countryController.country);

    return countryRouter;
};

module.exports = router;