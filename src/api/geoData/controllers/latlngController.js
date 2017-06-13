/**
 * Created by shubham on 13/6/17.
 */

var latlngController = function () {

   function generateRondom(min,max,precision) {
       var number;
       number = (Math.random()*(max-min)+min).toFixed(precision)*1;
       return number;
   }

    var latitude = function (req,res) {
       var latitudeList =[];
       for(var i=0;i<req.query.n;i++){
           latitudeList.push(generateRondom(-90,90,5))
       }
       res.json(latitudeList)
    };
    var longitude = function (req,res) {
        var longitudeList =[];
        for(var i=0;i<req.query.n;i++){
            longitudeList.push(generateRondom(-180,180,5))
        }
        res.json(longitudeList)
    };

    var latitudelongitude = function (req,res) {
        var latitudelongitudeList =[];
        for(var i=0;i<req.query.n;i++){
            latitudelongitudeList.push({"Latitude": generateRondom(-90,90,5),"Longitude":generateRondom(-180,180,5)})
        }
        res.json(latitudelongitudeList)
    };

  return {
      latitude:latitude,
      longitude:longitude,
      latitudelongitude:latitudelongitude
  }
};

module.exports = latlngController;