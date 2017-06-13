/**
 * Created by shubham on 13/6/17.
 */

var express = require('express');
var latlngRouter = express.Router();

var router = function () {
    var countryController = require('../controllers/latlngController')();
    latlngRouter.route('/')
        .get(countryController.latitudelongitude);
    latlngRouter.route('/lat')
        .get(countryController.latitude);
    latlngRouter.route('/lng')
        .get(countryController.longitude);

    return latlngRouter;
};

module.exports = router;