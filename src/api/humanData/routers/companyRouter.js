/**
 * Created by shubham on 10/6/17.
 */

var express = require('express');
var companyRouter = express.Router();


var router = function () {
    var companyController = require('../controllers/companyController')();
    companyRouter.route('/')
        .get(companyController.company);

    return companyRouter;
};

module.exports = router;