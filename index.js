
 options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '56c01798d5msh5cf86b08420f458p16e7c5jsnaf1d7a350318',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const cityName=document.getElementById("cityName")
const getWeather=(city)=>{
	cityName.innerHTML=city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
	 cloud_pct.innerHTML = response.cloud_pct;
	   temp.innerHTML = response.temp+" degree C";
	   feels_like.innerHTML = response.feels_like+" degree";
	   humidity.innerHTML = response.humidity+" %";
	   min_temp.innerHTML = response.min_temp+" degree C";
	   max_temp.innerHTML = response.max_temp+" degree C";
	   wind_speed.innerHTML = response.wind_speed+" km/hr";
	   wind_degrees.innerHTML = response.wind_degrees;
	   sunrise.innerHTML =(response.sunrise); // Format sunrise time
	   sunset.innerHTML = (response.sunset); // Format sunset time
 
  
	  // Now you can use the variables as needed
	  // console.log("Cloud Percentage:", cloud_pct);
	  // console.log("Temperature:", temp);
	  // console.log("Feels Like:", feels_like);
	  // console.log("Humidity:", humidity);
	  // console.log("Min Temperature:", min_temp);
	  // console.log("Max Temperature:", max_temp);
	  // console.log("Wind Speed:", wind_speed);
	  // console.log("Wind Degrees:", wind_degees);
	  // console.log("Sunrise:", sunrise);
	  // console.log("Sunset:", sunset);
	})
	.catch(err => console.log(err));
}

const city=document.getElementById("city")

const submit=document.getElementById("submit")
submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(city.value)
})

getWeather("Nagpur")


// Convert UTC time string to local time
function convertToLocaleTimeString(utcTimeString) {
	const date = new Date(utcTimeString);
	return date.toLocaleTimeString();
  }
  
  // Assuming response.sunrise and response.sunset are UTC time strings
  const sunriseTime = convertToLocaleTimeString(response.sunrise);
  const sunsetTime = convertToLocaleTimeString(response.sunset);
  
  // Update the HTML elements with formatted times
  sunrise.innerHTML = sunriseTime;
  sunset.innerHTML = sunsetTime;
  