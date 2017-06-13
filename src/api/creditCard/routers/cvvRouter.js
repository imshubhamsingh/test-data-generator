/**
 * Created by shubham on 13/6/17.
 */

var express = require('express');
var cvvRouter = express.Router();

var router = function () {
    var creditCardController = require('../../creditCard/controllers/cvvController')();
    cvvRouter.route('/')
        .get(creditCardController.cvv);

    return cvvRouter;
};

module.exports = router;