/**
 * Created by shubham on 12/6/17.
 */

var countryController = function () {
    var country = function (req,res) {
        var source = '../../../../data-plugins/geo/countries/';
        var countryList = [];
        var countries = require('../../../../data-plugins/geo/countries/countryList.json');
        for(var i=0;i<req.query.n;i++){
            countryList.push(require(source+countries.countries[Math.floor(Math.random()*countries.countries.length)]+'.json').countryName);
        }
        res.json(countryList);

    };
    return{
        country:country
    }
};

module.exports = countryController;