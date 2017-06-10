/**
 * Created by shubham on 9/6/17.
 */

var request = require('request');

var emailController = function () {
    var email;
    var emailList = function (req, res){
        var emailList =[];
        request('https://node-data-generator.herokuapp.com/api/names/fullNames?n='+req.query.n,function (err,request,body) {
            var data = JSON.parse(body);
            var emaildomain=require('../../../../data-plugins/human-data/email/email.json');
            for(var i=0;i<req.query.n;i++){
                email = data[i].toLowerCase().replace(' ','')+"@"+emaildomain.domain[Math.floor(Math.random()*emaildomain.domain.length)];
                emailList.push(email);
            }
            res.json(emailList);
        });

    };

    return{
        emailList:emailList
    }
};

module.exports = emailController;