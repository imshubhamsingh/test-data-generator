/**
 * Created by shubham on 9/6/17.
 */

var nameController = function () {
    var names = require('../../../../data-plugins/human-data/names/names.json');
    var firstNames = names.firstName;
    var lastNames = names.lastName;
    var nameList =[];
    var i;
    var index;

    var fullNames = function (req,res) {
        nameList =[];
        for(i=0;i<req.query.n;i++)  {
            nameList.push(firstNames[Math.floor(Math.random()*firstNames.length)].name+" "+lastNames[Math.floor(Math.random()*lastNames.length)]);
        }
        res.json(nameList);
    } ;
    var maleNames = function (req,res) {
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
    var femaleNames = function (req,res) {
        nameList =[];
        i=0;
        while(i<req.query.n)  {
            index = Math.floor(Math.random()*firstNames.length);
            if(firstNames[index].gender ==="female"){
                nameList.push(firstNames[index].name+" "+lastNames[Math.floor(Math.random()*lastNames.length)]);
                i++;
            }
        }
        res.json(nameList);
    };
    var surnames = function (req,res) {
        nameList =[];
        for(i=0;i<req.query.n;i++)  {
            nameList.push(lastNames[Math.floor(Math.random()*lastNames.length)]);        }
        res.json(nameList);
    } ;
    var middleNames = function (req,res) {
        nameList =[];
        var middleNamePossible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for(i=0;i<req.query.n;i++)  {
            nameList.push(firstNames[Math.floor(Math.random()*firstNames.length)].name+" "+ middleNamePossible[Math.floor(Math.random()*middleNamePossible.length)] +". "+lastNames[Math.floor(Math.random()*lastNames.length)]);
        }
        res.json(nameList);
    };

    return {
        maleNames: maleNames,
        femaleNames: femaleNames,
        fullNames: fullNames,
        surnames: surnames,
        middleNames:middleNames
    }
};

module.exports = nameController;