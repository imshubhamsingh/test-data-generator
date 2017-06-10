/**
 * Created by shubham on 9/6/17.
 */

var dateformat = function (format,min,max) {
    var date ='';
    var fullmonthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov" ,"Dec"];
    var dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    var fullDate = new Date(parseInt(Math.floor(Math.random()*(max-min)),10) + parseInt(min,10),Math.floor(Math.random()*12),Math.floor(Math.random()*31));
    if (format ==="Jan 1, 2017") {
        date = monthNames[fullDate.getMonth()]+" "+fullDate.getDate()+","+fullDate.getFullYear();
        console.log(fullDate.getFullYear());
    }else if(format ==="January 1 2017"){
        date = fullmonthNames[fullDate.getDay()]+" "+fullDate.getDate()+" "+fullDate.getFullYear();
    }else if(format ==="Mon, Jan 1"){
        date = dayNames[fullDate.getDay()]+","+monthNames[fullDate.getMonth()]+" "+fullDate.getDate();
    }else if(format ==="Mon, Jan 1, 2017"){
        date = dayNames[fullDate.getDay()]+","+monthNames[fullDate.getMonth()]+" "+fullDate.getDate()+","+fullDate.getFullYear();
    }else if(format ==="3/25/2017"){
        date = (parseInt(fullDate.getMonth(),10)+1)+"/"+fullDate.getDate()+"/"+fullDate.getFullYear()
    }else if(format ==="25/3/2017"){
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