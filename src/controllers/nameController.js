/**
 * Created by shubham on 9/6/17.
 */

var nameController = function () {
    var names = require("../../plugins/names/names.json");
    var firstNames = names.firstName;
    var lastNames = names.lastName;
    var nameList =[];
    var i;
    var index;

    var fullName = function (req,res) {
        nameList =[];
        for(i=0;i<req.query.n;i++)  {
            nameList.push(firstNames[Math.floor(Math.random()*firstNames.length)].name+" "+lastNames[Math.floor(Math.random()*lastNames.length)]);
        }
        res.json(nameList);
    } ;
    var maleName = function (req,res) {
        nameList =[];
        i=0;
        while(i<req.query.n) {
            index = Math.floor(Math.random()*firstNames.length);
            if(firstNames[index].gender ==="male"){
                nameList.push(firstNames[index].name+" "+lastNames[Math.floor(Math.random()*lastNames.length)]);
                i++;
            }
        }
        res.json(nameList);
    } ;
    var femaleName = function (req,res) {
        nameList =[];
        i=0;
        index = Math.floor(Math.random()*firstNames.length);
        while(i<req.query.n)  {
            if(firstNames[index].gender ==="female"){
                nameList.push(firstNames[Math.floor(Math.random()*firstNames.length)].name+" "+lastNames[Math.floor(Math.random()*lastNames.length)]);
                i++;
            }
        }
        res.json(nameList);
    };
    var surname = function (req,res) {
        nameList =[];
        for(i=0;i<req.query.n;i++)  {
            nameList.push(lastNames[Math.floor(Math.random()*lastNames.length)]);        }
        res.json(nameList);
    } ;

    return {
        maleName: maleName,
        femaleName: femaleName,
        fullName: fullName,
        surname: surname
    }
};

module.exports = nameController;