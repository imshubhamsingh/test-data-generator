/**
 * Created by shubham on 10/6/17.
 */

var express = require('express');
var phoneRouter = express.Router();

var router = function(){
    var phoneController = require('../controllers/phoneController')();
    phoneRouter.route('/')
        .get(phoneController.phone);
    return phoneRouter;
};

module.exports = router;