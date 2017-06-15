/**
 * Created by shubham on 13/6/17.
 */

var creditCardController = function () {
    var creditCardData = require('../../../../data-plugins/cerdit-card/list.json');

    function strrev(str) {
        var revstr='';
        for (var i = str.length-1; i>=0; i--)
            if(str.charAt(i)!==" ")revstr+=str.charAt(i);
        return revstr;
    }
//Applying Luhn algorithm to check if the credit card number is valid or not
    var ccChecker = function (ccNumber) {
      var checkingCreditCard = strrev(ccNumber);
      var pos =0;
      var even = 0;
      var odd = 0;
      while ( pos < checkingCreditCard.length ) {
          if(pos%2===0){
                var temp = parseInt(checkingCreditCard.charAt(pos))*2;
                if(temp>9) temp-=9;
                even +=temp;
          }else{
              odd+= parseInt(checkingCreditCard.charAt(pos));
          }
            pos++;
        }
        var checkdigit = ((even+odd)*9)%10;
        return ccNumber+checkdigit.toString();
    };

    var completed_number = function (prefix, format) {
        var change,creditCardNo="";

                for(var i=0;i<=prefix.length;i++) {

                    change = 0;
                    if (format.charAt(i) === "X") {
                        creditCardNo += prefix.charAt(i);
                        change = 1;
                    }
                    if (change === 0) {
                        creditCardNo += format.charAt(i)
                    }
                }
                while (creditCardNo.length < format.length-1) {
                    change = 0;
                    if (format.charAt(creditCardNo.length - 1) === "X") {
                        creditCardNo += Math.floor(Math.random() * 10).toString();
                        change = 1
                    }
                    if (change === 0) {
                        creditCardNo += format.charAt(creditCardNo.length - 1);

                    }
                }
        return ccChecker(creditCardNo);
    };

    var creditCard = function () {
        var index =Math.floor(Math.random()*creditCardData.length);
        var type = creditCardData[index].name;
        //console.log(type);
        var creditCardNoFormat = creditCardData[index].ccformat[Math.floor(Math.random()*creditCardData[index].ccformat.length)];
        var creditCardNoPrefix = creditCardData[index].ccprefix[Math.floor(Math.random()*creditCardData[index].ccprefix.length)];
        //console.log(creditCardNoPrefix);
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
        res.json(creditCardList);
    };
    var specificCreditCard = function (req,res) {
        var specifiedCreditCardList = [];
        var specifiedCreditCard = req.params.specifiedCreditCard;
        for(var i=0;i<req.query.n;i++){
            for(var j=0;j<creditCardData.length;j++){
                if(creditCardData[j].short === specifiedCreditCard){
                    break;
                }
            }
            var creditCardNoFormat = creditCardData[j].ccformat[Math.floor(Math.random()*creditCardData[j].ccformat.length)];
            var creditCardNoPrefix = creditCardData[j].ccprefix[Math.floor(Math.random()*creditCardData[j].ccprefix.length)];
            specifiedCreditCardList.push(completed_number(creditCardNoPrefix,creditCardNoFormat));
        }
        res.json(specifiedCreditCardList);
    };

    return{
        creditCard:creditCardGenerator,
        specificCreditCard:specificCreditCard
    }
};

module.exports = creditCardController;