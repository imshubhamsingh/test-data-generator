/**
 * Created by shubham on 15/6/17.
 */

var loremIpsumController = function () {

    var loremIpsumGenerator = function (req,res) {
        var loremIpsumData = require('../../../../data-plugins/text data/loremIpsum.json');
        var loremIpsumPara ="";
        loremIpsumPara+=(loremIpsumData[Math.floor(Math.random()*loremIpsumData.length)])
        for(var i=0;i<(req.query.n)-1;i++){
            loremIpsumPara+=" "+(loremIpsumData[Math.floor(Math.random()*loremIpsumData.length)])
        }
        res.end(loremIpsumPara);

    };
    return{
        loremIpsum:loremIpsumGenerator
    }
};

module.exports = loremIpsumController;