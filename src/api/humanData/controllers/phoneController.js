/**
 * Created by shubham on 10/6/17.
 */

function phoneno(str,str2,format) {
    var no="";
    var change;
     for(var i=0;i<=str.length;i++){
         change = 0;
         for(var key in format){
             if(str.charAt(i)===key) {
                 no += format[key][Math.floor(Math.random() * format[key].length)];
                 change = 1;
             }
         }
         if(change===0){
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
            phoneList.push(phoneno(phoneData.phone[req.query.fomat],phoneData.areaCode,phoneData.phoneReplacement));
        }
        res.json(phoneList);
    };
    return{
        phone: phone
    }
};

module.exports = phoneController;