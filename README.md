Data Generator
===================

As of now I have created email, name, date,company, phone number, country, region, city, latitude and longitude generator API

## Human Related Data Generator

### Name Generator Api
>- [Full Name](https://node-data-generator.herokuapp.com/api/names/fullNames?n=20)
>- [Male Names](https://node-data-generator.herokuapp.com/api/names/maleNames?n=20)
>- [Female Names](https://node-data-generator.herokuapp.com/api/names/femaleNames?n=20)
>- [With Middle Names](https://node-data-generator.herokuapp.com/api/names/middleNames?n=20)
>- [Surnames](https://node-data-generator.herokuapp.com/api/names/surnames?n=20)

### Email Generator Api
>- [Random valid Emails](https://node-data-generator.herokuapp.com/api/emails?n=20)

### Date Generator Api
>- [Format: Jun 10, 2017](https://node-data-generator.herokuapp.com/api/dates?minYear=1997&maxYear=2018&format=m%20d,y&n=100)
>- [Format: June 10th 2017](https://node-data-generator.herokuapp.com/api/dates?minYear=1997&maxYear=2018&format=M%20ds,%20y&n=100)
>- [Format: June 10 2017](https://node-data-generator.herokuapp.com/api/dates?minYear=1997&maxYear=2018&format=M%20d%20y&n=100)
>- [Format: Sat, Jun 10](https://node-data-generator.herokuapp.com/api/dates?minYear=1997&maxYear=2018&format=D,%20m%20d&n=100)
>- [Format: Sat, Jun 10th, 2017](https://node-data-generator.herokuapp.com/api/dates?minYear=1997&maxYear=2018&format=D,%20m%20ds%20y&n=100)
>- [Format: 06/10/2017](https://node-data-generator.herokuapp.com/api/dates?minYear=1997&maxYear=2018&format=m/d/y&n=100)
>- [Format: 16/04/2017](https://node-data-generator.herokuapp.com/api/dates?minYear=1997&maxYear=2018&format=d/m/y&n=100)
>- [Format: 10-06-2017](https://node-data-generator.herokuapp.com/api/dates?minYear=1997&maxYear=2018&format=d-m-y&n=100)
>- [Format: 06-10-2017](https://node-data-generator.herokuapp.com/api/dates?minYear=1997&maxYear=2018&format=m/d/y&n=100)

### Company names Generator Api
>- [Random companies](https://node-data-generator.herokuapp.com/api/companies?n=200)


### Phone number Generator Api
> Australia
>  - [Xxxx-xxxx](https://node-data-generator.herokuapp.com/api/phone?country=australia&fomat=0&n=200)
>  - [(0x) xxxx xxxx](https://node-data-generator.herokuapp.com/api/phone?country=australia&fomat=1&n=200)
>  - [04xx xxx xxx](https://node-data-generator.herokuapp.com/api/phone?country=australia&fomat=2&n=200)
 
>  Canada
>  - [(AAA) Xxx-xxxx](https://node-data-generator.herokuapp.com/api/phone?country=canada&fomat=0&n=200)
>  - [1 (AAA) Xxx-xxxx](https://node-data-generator.herokuapp.com/api/phone?country=canada&fomat=1&n=200)
>  - [1-AAA-Xxx-xxxx](https://node-data-generator.herokuapp.com/api/phone?country=canada&fomat=2&n=200)

> India
>  - [+91 xxxxxxxxxx](https://node-data-generator.herokuapp.com/api/phone?country=india&fomat=0&n=200)
>  - [0xx-xxxxxxxx](https://node-data-generator.herokuapp.com/api/phone?country=india&fomat=1&n=200)
>  - [0Xxx-xxxxxxx](https://node-data-generator.herokuapp.com/api/phone?country=india&fomat=2&n=200)
>  - [0Xxxx-xxxxxx](https://node-data-generator.herokuapp.com/api/phone?country=india&fomat=3&n=200)
>  
> UK
>  - [+44 7xxx xxx xxx](https://node-data-generator.herokuapp.com/api/phone?country=uk&fomat=0&n=200)
>  - [07xxx xxx xxx](https://node-data-generator.herokuapp.com/api/phone?country=uk&fomat=1&n=200)

> US
>  - [Xxxx-xxxx](https://node-data-generator.herokuapp.com/api/phone?country=us&fomat=0&n=200)
>  - [(0x) xxxx xxxx](https://node-data-generator.herokuapp.com/api/phone?country=us&fomat=1&n=200)
>  - [04xx xxx xxx](https://node-data-generator.herokuapp.com/api/phone?country=us&fomat=2&n=200)

## Geographic Related Data Generator

### Country names Generator Api
>- [Random country](https://node-data-generator.herokuapp.com/api/countries?n=20)

### Region names of various Country Generator Api
>- [Random regions of Australia](http://node-data-generator.herokuapp.com/api/countries/australia?n=20)
>- [Random regions of Canada](http://node-data-generator.herokuapp.com/api/countries/canada?n=20)
>- [Random regions of India](http://node-data-generator.herokuapp.com/api/countries/india?n=20)
>- [Random regions of UK](http://node-data-generator.herokuapp.com/api/countries/uk?n=20)
>- [Random regions of US](http://node-data-generator.herokuapp.com/api/countries/us?n=20)

### City List generator of various regions of various Country Api
 It has got lot of options ...As of now I'm giving only one example for each country
> - [Cities in Queensland (Australia)](http://node-data-generator.herokuapp.com/api/countries/australia/QLD?n=20)
> - [Cities in Ontario (Canada)](http://node-data-generator.herokuapp.com/api/countries/canada/ON?n=20)
> - [Cities in Maharastra (India)](http://node-data-generator.herokuapp.com/api/countries/india/MH?n=20)
> - [Cities in Yorkshire (UK)](http://node-data-generator.herokuapp.com/api/countries/uk/YK?n=20)
> - [Cities in Alaska (US)](http://node-data-generator.herokuapp.com/api/countries/us/AK?n=20)

### Latitude and Longitude Generator Api
>- [Random Latitude](http://localhost:3010/api/latlng/lat?n=20)
>- [Random Longitude](http://localhost:3010/api/latlng/lng?n=20)
>- [Random Latitude and Longitude](http://localhost:3010/api/latlng?n=20)

## Credit Card Number generator Api

> [Random Fake Credit Card](https://node-data-generator.herokuapp.com/api/creditCard?n=20)

### Fake credit card numbers generator for all major brands
>[VISA](https://node-data-generator.herokuapp.com/api/creditCard/visa?n=20),
[American Express (AMEX)](https://node-data-generator.herokuapp.com/api/creditCard/amex?n=20),
[Discover](https://node-data-generator.herokuapp.com/api/creditCard/discover?n=20),
[JCB](https://node-data-generator.herokuapp.com/api/creditCard/jcb16?n=20),
[Diners Club - Carte Blanche](https://node-data-generator.herokuapp.com/api/creditCard/dinersClubEnRoute?n=20),
[Diners Club - International](https://node-data-generator.herokuapp.com/api/creditCard/dinersClubInt?n=20),
[Maestro](https://node-data-generator.herokuapp.com/api/creditCard/maestro?n=20),
[Visa Electron](https://node-data-generator.herokuapp.com/api/creditCard/visaElectron?n=20),
[Mastercard](https://node-data-generator.herokuapp.com/api/creditCard/mastercard?n=20),
[Carte Blanche](https://node-data-generator.herokuapp.com/api/creditCard/carteBlanche?n=20)

### CVV generator Api
>[Random CVV](https://node-data-generator.herokuapp.com/api/cvv?n=20)   
  