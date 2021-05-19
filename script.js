// XML HTTP request
// step1: create an instance of xml http 
var request = new XMLHttpRequest();
// step2: initiate a new connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
// step3: send request to server
request.send();
// step4: if the server respond successfully , we need to retrive the data 
request.onload = function( ){
    var data = JSON.parse(this.response);
   for(var i =0; i<250; ++i)
   {
       var res= data[i].name;
       console.log(res);
   }
}
