/**
 * Created by shubham on 10/6/17.
 */

function phoneno(str,str2) {
    var no="";

     for(var i=0;i<str.length;i++){
        if(str.charAt(i)==='x'){
            no+= (Math.floor(Math.random()*10)).toString();
        }else if(str.charAt(i)==='X'){
            no+=(Math.floor(Math.random()*9+1)).toString();
        }else if(str.charAt(i)==='B'){
            no+=(Math.floor(Math.random()*4+6)).toString();
        }else{
            no+=str.charAt(i).toString();
        }
    }
    if(str2 !== undefined){
       return (no.replace(new RegExp("AAA",'g'),str2[Math.floor(Math.random()*str2.length)].toString()));
    }
    return no;
}
var phoneController = function () {
    var phone = function (req,res) {
        var phoneData = require('../../../../data-plugins/geo/countries/'+req.query.country+'.json');
        var phoneList = [];

        for (var i = 0; i < req.query.n; i++) {
            phoneList.push(phoneno(phoneData.phone[req.query.fomat],phoneData.areaCode));
        }
        res.json(phoneList);
    };
    return{
        phone: phone
    }
};

module.exports = phoneController;