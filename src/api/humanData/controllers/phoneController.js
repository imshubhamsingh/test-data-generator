/**
 * Created by shubham on 10/6/17.
 */

/**
 * Created by shubham on 10/6/17.
 */

var phoneController = function () {
    var phone = function (req,res) {
        var phoneData = require('../../../../data-plugins/human-data/company/company.json');
        var phoneList = [];

        for (var i = 0; i < req.query.n; i++) {
            phoneList.push();
        }
        res.json(phoneList);
    };

    return{
        phone: phone

    }
};

module.exports = phoneController;