/**
 * Created by shubham on 9/6/17.
 */

var express = require('express');
var nameRouter = express.Router();

var router = function () {
    var nameController = require('../controllers/nameController')();
    nameRouter.route('/fullNames')
        .get(nameController.fullNames);
    nameRouter.route('/maleNames')
        .get(nameController.maleNames);
    nameRouter.route('/femaleNames')
        .get(nameController.femaleNames);
    nameRouter.route('/surnames')
        .get(nameController.surnames);
    nameRouter.route('/middleNames')
        .get(nameController.middleNames);
    return nameRouter;
};

module.exports = router;



