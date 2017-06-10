/**
 * Created by shubham on 9/6/17.
 */

var express = require('express');
var dateRouter = express.Router();

var router = function () {
    var dateController = require('../controllers/dateController')();
    dateRouter.route('/')
        .get(dateController.date);

    return dateRouter;
};

module.exports = router;