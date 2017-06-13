/**
 * Created by shubham on 13/6/17.
 */

var creditCardController = function () {
    var cvv = function (req,res) {
        var cvvList =[];
        for(var i=0;i<req.query.n;i++){
            cvvList.push(Math.floor(Math.random()*(888)+111));
        }
        res.json(cvvList);
    };

    return{
        cvv:cvv
    }
};

module.exports = creditCardController;