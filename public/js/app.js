var weatherAPI = "/weather";
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const weatherIcon = document.querySelector('.weatherIcon i');
const weatherCondition = document.querySelector('.weatherCondition');
const temp = document.querySelector('.temp span');

const locationEle = document.querySelector('.place');
const dateEle = document.querySelector('.date');

const currDate = new Date();
const options = {month:"long"};
const monthName = currDate.toLocaleDateString("en-US", options);
dateEle.textContent = currDate.getDate() +", " + monthName + " " + currDate.getFullYear();

if("geolocation" in navigator){
    locationEle.textContent = 'Detecting location...';
    navigator.geolocation.getCurrentPosition(
        function (position){
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
            fetch(apiUrl)
            .then((response) => response.json())
            .then((data) =>{
                if(data && data.address && data.address.city){
                    const city = data.address.city;
                    showData(city);
                }else{
                    console.log("City not found");
                }
            }).catch((error)=>{
                console.log(error);
            })
        },
        function(error){
            console.log(error.message);
        }
    )
}else{
    locationEle.textContent = 'Geolocation not supported';
}

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    locationEle.textContent = 'Loading...';
    weatherIcon.className = '';
    temp.textContent = '';
    weatherCondition.textContent = '';

    showData(search.value);
});


function showData(city){
    getWeatherData(city, (result) => {
        console.log(result);
        if(result.cod == 200){
            if(result.weather[0].description == 'rain' || result.weather[0].description == 'fog'){
                weatherIcon.className = 'wi wi-day-' + result.weather[0].description;
            }else{
                weatherIcon.className = 'wi wi-day-cloudy';
            }
            locationEle.textContent = result.name;
            temp.textContent = (result.main.temp) + '°C';
            weatherCondition.textContent = result.weather[0].description.toUpperCase();
        }else{
            locationEle.textContent = 'City not found';
        }
    })
}

function getWeatherData(city, callback){
    const locAPI = weatherAPI + "?address=" + city;
    fetch(locAPI).then((response)=>{
        response.json().then((response) =>{
            callback(response);
        })
    })
}

