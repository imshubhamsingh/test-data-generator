/**
 * Created by shubham on 13/6/17.
 */

var express = require('express');
var creditCardRouter = express.Router();

var router = function () {
    var creditCardController = require('../../creditCard/controllers/creditCardController')();
    creditCardRouter.route('/')
        .get(creditCardController.creditCard);
    creditCardRouter.route('/:specifiedCreditCard')
        .get(creditCardController.specificCreditCard);

    return creditCardRouter;
};

module.exports = router;