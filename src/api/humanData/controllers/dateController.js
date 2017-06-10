/**
 * Created by shubham on 9/6/17.
 */

var dateformat = function (format,min,max) {
    var date ='';
    var fullmonthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov" ,"Dec"];
    var dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    function datesuffix(i) {
        var j = i % 10,
            k = i % 100;
        if (j === 1 && k !== 11) {
            return i + "st";
        }
        if (j === 2 && k !== 12) {
            return i + "nd";
        }
        if (j === 3 && k !== 13) {
            return i + "rd";
        }
        return i + "th";
    }

    function addingZero(i){
        if(i<10){
            return "0"+i.toString()
        }else{
            return i.toString();
        }
    }

    var fullDate = new Date(parseInt(Math.floor(Math.random()*(max-min)),10) + parseInt(min,10),Math.floor(Math.random()*12),Math.floor(Math.random()*31));
    if (format ==="m d,y") {//Jun 10, 2017
        date = monthNames[fullDate.getMonth()]+" "+fullDate.getDate()+", "+fullDate.getFullYear();
    }else if(format ==="M ds, y"){//June 10th, 2017
        date = fullmonthNames[fullDate.getMonth()]+" "+datesuffix(fullDate.getDate())+", "+fullDate.getFullYear();
    }else if(format ==="M d y"){//June 10 2017
        date = fullmonthNames[fullDate.getDay()]+" "+fullDate.getDate()+" "+fullDate.getFullYear();
    }else if(format ==="D, m d"){//Sat, Jun 10
        date = dayNames[fullDate.getDay()]+", "+monthNames[fullDate.getMonth()]+" "+fullDate.getDate();
    }else if(format ==="D, m ds y"){//Sat, Jun 10th, 2017
        date = dayNames[fullDate.getDay()]+", "+monthNames[fullDate.getMonth()]+" "+datesuffix(fullDate.getDate())+", "+fullDate.getFullYear();
    }else if(format ==="m/d/y"){//04/10/2017
        date = addingZero(parseInt(fullDate.getMonth(),10)+1)+"/"+addingZero(fullDate.getDate())+"/"+fullDate.getFullYear()
    }else if(format ==="d/m/y"){//04/10/2017
        date = addingZero(fullDate.getDate())+"/"+addingZero(parseInt(fullDate.getMonth(),10)+1)+"/"+fullDate.getFullYear()
    }else if(format ==="d-m-y"){//04-10-2017
        date = fullDate.getDate()+"-"+addingZero(parseInt(fullDate.getMonth(),10)+1)+"-"+fullDate.getFullYear()
    }else if(format ==="d.m.y"){//04.10.2017
        date = addingZero(fullDate.getDate())+"."+addingZero(parseInt(fullDate.getMonth(),10)+1)+"."+fullDate.getFullYear()
    }
    return date;
};
var dataController = function () {
        var dateList={
            dateFormatType:"",
            dateList:[]
        };
        var i;
        var data =function (req,res) {
            dateList.dateFormatType=req.query.format;
            dateList.dateList =[];
            for(i=0;i<req.query.n;i++){
                dateList.dateList.push(dateformat(req.query.format,req.query.minYear,req.query.maxYear));
            }
            res.json(dateList);
        };
    return{
        date: data
    }
};

module.exports = dataController;