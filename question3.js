var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    console.log(result);

for(var i=0;i<result.length;i++)
{
   
    var countryName=result[i].name;
    var region=result[i].region;
    var subRegion=result[i].subregion;
    var population=result[i].population;
    console.log("COUNTRY NAME IS :",countryName);
    console.log("REGION IS :",region);
    console.log("SUB REGION IS :",subRegion);
    console.log("POPULATION FOR",countryName ,"is",population);
   
}
}