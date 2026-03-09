
function LoadWeatherData(cityName){
    var API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d3f4027058d093390770a7506b1498f9&units=metric`;

    fetch(API_URL)
    .then(function(response){
        return response.json();
    })
    .then(function(weatherObject){
        document.getElementById("lblCity").textContent = weatherObject.name;
        document.getElementById("lblTemp").innerHTML = `${weatherObject.main.temp}<sup>&deg;</sup>C`;
        document.getElementById("lblDescription").innerHTML = `${weatherObject.weather[0].description.toUpperCase()} <br> Feels Like ${weatherObject.main.feels_like}&deg;`
        document.getElementById("lblHumidity").innerHTML = weatherObject.main.humidity + "%";
        document.getElementById("progressbar").style.width = `${weatherObject.main.humidity}%`;
        document.getElementById("lblWindSpeed").innerHTML = weatherObject.wind.speed + "km/h"; 
        document.getElementById("windProgressbar").style.width = `${weatherObject.wind.speed*10}%`;
        document.getElementById("lblPressure").innerHTML = weatherObject.main.pressure + "hPa";
        document.getElementById("PProgressbar").style.width = `${weatherObject.main.pressure/50}%`;
    })
}
    function SearchClick(){
        var cityName = document.getElementById("txtCity").value;
        LoadWeatherData(cityName);
    }
document.addEventListener("DOMContentLoaded", function(){
    const heart = document.getElementById("heart");
const redHeart = document.getElementById("red-heart")
heart.addEventListener("click", function(){
    heart.classList.add("d-none");
    redHeart.classList.remove("d-none")
})
redHeart.addEventListener("click", function(){
    redHeart.classList.add("d-none");
    heart.classList.remove("d-none");
})
const dBox = document.getElementById("dialog-box");
const share = document.getElementById("share");
share.addEventListener("click", function (){
    dBox.classList.remove("d-none");
})
let close = document.getElementById("closeDialog");
close.addEventListener("click", function(){
    dBox.classList.add("d-none");
})
const signIn = document.getElementById("signInForm");
let close1 = document.getElementById("close2");
const account = document.getElementById("account");
account.addEventListener("click", ()=>{
    signIn.classList.remove("d-none");
})
close1.addEventListener("click", ()=>{
    signIn.classList.add("d-none");
})
})




