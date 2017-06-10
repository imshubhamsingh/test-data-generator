/**
 * Created by shubham on 9/6/17.
 */

var dateformat = function (format,min,max) {
    var date ='';
    var fullmonthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov" ,"Dec"];
    var dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    var fullDate = new Date(parseInt(Math.floor(Math.random()*(max-min)),10) + parseInt(min,10),Math.floor(Math.random()*12),Math.floor(Math.random()*31));
    if (format ==="Sat 10, 2017") {
        date = monthNames[fullDate.getMonth()]+" "+fullDate.getDate()+","+fullDate.getFullYear();
    }else if(format ==="Saturday 10 2017"){
        date = fullmonthNames[fullDate.getDay()]+" "+fullDate.getDate()+" "+fullDate.getFullYear();
    }else if(format ==="Sat, Jun 10"){
        date = dayNames[fullDate.getDay()]+","+monthNames[fullDate.getMonth()]+" "+fullDate.getDate();
    }else if(format ==="Sat, Jun 10, 2017"){
        date = dayNames[fullDate.getDay()]+","+monthNames[fullDate.getMonth()]+" "+fullDate.getDate()+","+fullDate.getFullYear();
    }else if(format ==="4/10/2017"){
        date = (parseInt(fullDate.getMonth(),10)+1)+"/"+fullDate.getDate()+"/"+fullDate.getFullYear()
    }else if(format ==="10/4/2017"){
        date = fullDate.getDate()+"/"+(parseInt(fullDate.getMonth(),10)+1)+"/"+fullDate.getFullYear()
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