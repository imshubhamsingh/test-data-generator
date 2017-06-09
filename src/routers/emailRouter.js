/**
 * Created by shubham on 9/6/17.
 */

var express = require('express');
var emailRouter = express.Router();

var router = function () {
    var emailController = require('../controllers/emailController')();
       emailRouter.route('/')
           .get(emailController.emailList);

    return emailRouter;
};

module.exports = router;