/**
 * Created by shubham on 10/6/17.
 */

var companyController = function () {
    var company = function (req,res) {
        var companyData = require('../../../../data-plugins/human-data/company/company.json');
        var companyList = [];

        for (var i = 0; i < req.query.n; i++) {
            companyList.push(companyData.companyNames[Math.floor(Math.random() * companyData.companyNames.length)] + " "
                + companyData.companyTypes[Math.floor(Math.random() * companyData.companyTypes.length)]);
        }
        res.json(companyList);
    };

    return{
        company: company

    }
};

module.exports = companyController;