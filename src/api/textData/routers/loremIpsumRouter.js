/**
 * Created by shubham on 15/6/17.
 */

var express = require('express');
var loremIpsumRouter = express.Router();

var router = function () {
    var loremIpsumController = require('../controllers/loremIpsumController')();
    loremIpsumRouter.route('/')
        .get(loremIpsumController.loremIpsum);

    return loremIpsumRouter;
};

module.exports = router;