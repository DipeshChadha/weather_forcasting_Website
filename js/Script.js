async function fetchData() 
{
 await fetch('http://api.weatherapi.com/v1/current.json?key=735cabe3c3334eac91155206250506&q=Chandigarh&aqi=no')
  .then(response =>{
//response.text()
   return response.json(); 
}).then((response) => { 
  console.log("Data fetched successfully",response);
  console.log("Data fetched successfully",response.current.temp_c);

  var city=document.getElementById("city");
  var temp=document.getElementById("temp");
  var condition=document.getElementById("condition");


  city.innerHTML=response.location.name+ ", " + response.location.country;
  temp.innerHTML=response.current.temp_c + "°C";
    condition.innerHTML=response.current.condition.text;
})
  };
fetchData();
