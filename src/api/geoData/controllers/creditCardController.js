/**
 * Created by shubham on 13/6/17.
 */

var creditCardController = function () {
    var creditCard = function () {
        var creditCardData = require('../../../../data-plugins/cerdit-card/list.json');
        var index =Math.floor(Math.random()*creditCardData.length);
        var type = creditCardData[index].name;
        var creditCardNo = creditCardData[index].format[Math.floor(Math.random()*creditCardData[index].format)];

        return {
            "Type":type,
            "creditCardNo":""
        };

    };


    var creditCardGenerator = function (req,res) {
       var creditCardList = [];

        for(var i=0;i<req.query.n;i++){



         creditCardList.push();
        }
        res.json(creditCardList)
    };

    return{

    }
};

module.exports = creditCardController;