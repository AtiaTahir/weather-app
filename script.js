const apikey = "99911668c4c9c24fa597f299ff45eb04";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status==404){
        document.querySelector(".error").style.display = "block";
         document.querySelector(".weather").style.display = "none";
        }
    else{
     var data = await response.json();
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main == "Clouds") {
        weathericon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "images/rain.png";
    }
    else {
        weathericon.src = "images/weather.png";
     }
     document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
 
searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});