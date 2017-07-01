/**
 * Created by shubham on 12/6/17.
 */

var countryController = function () {
    var country = function (req,res) {
        var source = '../../../../data-plugins/geo/countries/';
        var countryList = [];
        var countries = require('../../../../data-plugins/geo/countries/countryList.json');
        for(var i=0;i<req.query.n;i++){
            countryList.push(countries[Math.floor(Math.random()*countries.length)].name);
        }
        res.json(countryList);

    };
    var regionsInCountry = function (req,res) {
      var regionList = [];
      var country = require('../../../../data-plugins/geo/countries/'+req.params.country+'.json');
      for(var i=0;i<req.query.n;i++){
          regionList.push(country.countryData[Math.floor(Math.random()*country.countryData.length)].regionName)
      }
        res.json(regionList);
    };
    var citiesInRegion = function (req,res) {
      var citiesList = [];
        var country = require('../../../../data-plugins/geo/countries/'+req.params.country+'.json');
        for(var i=0;i<req.query.n;i++){
            for(var j=0;j<country.countryData.length;j++){
                if(req.params.regionShort===country.countryData[j].regionShort){
                    citiesList.push(country.countryData[j].cities[Math.floor(Math.random()*country.countryData[j].cities.length)])
                }
            }
        }
        res.json(citiesList);
    };
    return{
        country:country,
        regionsInCountry:regionsInCountry,
        citiesInRegion:citiesInRegion
    }
};

module.exports = countryController;