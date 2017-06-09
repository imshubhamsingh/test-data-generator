/**
 * Created by shubham on 9/6/17.
 */

var express = require('express');
var nameRouter = express.Router();

var router = function () {
    var nameController = require("../controllers/nameController")();
    nameRouter.route('/fullName')
        .get(nameController.fullName);
    nameRouter.route('/maleName')
        .get(nameController.maleName);
    nameRouter.route('/femaleName')
        .get(nameController.femaleName);
    nameRouter.route('/surname')
        .get(nameController.surname);
    return nameRouter;
};

module.exports = router;



