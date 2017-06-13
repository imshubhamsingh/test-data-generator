/**
 * Created by shubham on 13/6/17.
 */

var creditCardController = function () {
    var creditCardData = require('../../../../data-plugins/cerdit-card/list.json');

    var completed_number = function (prefix, format) {
        var change,creditCardNo ="";
        for(var i=0;i<prefix.length;i++){
            change = 0;
            if(format.charAt(i) ==="X"){
                creditCardNo+=prefix.charAt(i);
                change=1;
            }
            if(change === 0){
                creditCardNo+=format.charAt(i)
            }
        }
        console.log(creditCardNo+"+++");

        while(creditCardNo.length< format.length-1){
            change = 0;
            if(format.charAt(creditCardNo.length-1) ==="X"){
                creditCardNo+=Math.floor(Math.random()*10).toString();
                change = 1
            }
            if(change === 0){
                creditCardNo+=format.charAt(creditCardNo.length-1);
            }
        }
        return creditCardNo;
    };

    var creditCard = function () {
        var index =Math.floor(Math.random()*creditCardData.length);
        var type = creditCardData[index].name;
        console.log(type);
        var creditCardNoFormat = creditCardData[index].ccformat[Math.floor(Math.random()*creditCardData[index].ccformat.length)];
        console.log(creditCardNoFormat);
        var creditCardNoPrefix = creditCardData[index].ccprefix[Math.floor(Math.random()*creditCardData[index].ccprefix.length)];
        console.log(creditCardNoPrefix);
        return {
            "Type":type,
            "creditCardNo":completed_number(creditCardNoPrefix,creditCardNoFormat)
        };

    };


    var creditCardGenerator = function (req,res) {
       var creditCardList = [];

        for(var i=0;i<req.query.n;i++){
         creditCardList.push(creditCard());
        }
        res.json(creditCardList)
    };

    return{
        creditCard:creditCardGenerator
    }
};

module.exports = creditCardController;