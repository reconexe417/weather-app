const api_key = "a373464f66b21165ab59ca66d8110b56";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");


async function check_weather(city){
    const response = await fetch(api_url + city + `&appid=${api_key}`);
    let data = await response.json(); //await tells javascript to wait for the following line to run first, then run the other lines
    console.log(data)
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else{
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds" && data.main.temp >= 10){
        weathericon.src = "images/rainsvg.svg"
    }
    else if(data.weather[0].main == "Clouds" && data.main.temp <= 10){
        weathericon.src = "images/snow.svg"
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "images/sun.svg";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "images/rain.svg"
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "images/rain.svg"
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "images/mist.svg"
    }
    document.querySelector(".weather").style.display = "block"
}


}

searchbtn.addEventListener("click", ()=> { check_weather(searchbox.value) } )

//check_weather();

