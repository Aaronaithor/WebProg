const lower = document.querySelector('.lower');
const searchBtn = document.querySelector('.search-button');
const body = document.querySelector('body');
const resetBtn = document.querySelector('.reset-button');

async function dict() {
    const city = document.querySelector('.search-city').value;
    const country = document.querySelector('.search-country').value;

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},${country}/${today}?key=APIKEY`);
    const currentData = await response.json();

    const dict = {
        weather : currentData['currentConditions']['icon'],
        tempFaren : currentData['currentConditions']['temp'],
        feelsLikeFaren : currentData['currentConditions']['feelslike'],
        humidity : currentData['currentConditions']['humidity'],
    };
    
    const pastLowerContent = document.querySelector('.lowerContent');
    const celsius = document.querySelector('#celsius');
    const farenheit = document.querySelector('#farenheit')

    if(pastLowerContent){
        lower.innerHTML = "";
    }

    const lowerContent = document.createElement('div');
    lowerContent.classList.add('lowerContent');

    const weatherDisp = document.createElement('div');
    weatherDisp.innerHTML = "Weather: " + dict.weather;
    const humidityDisp = document.createElement('div');
    humidityDisp.innerHTML = "Humidity: " + dict.humidity + "%";
    let tempDisp = document.createElement('div');
    let feelsDisp = document.createElement('div');

    if(celsius.checked){
        tempDisp.innerHTML = "Temperature: " + parseInt((parseInt(dict.tempFaren)-32)*5/9) + "°C";
        feelsDisp.innerHTML = "Feels Like: " + parseInt((parseInt(dict.feelsLikeFaren)-32)*5/9) + "°C";
    }else if (farenheit.checked){
        tempDisp.innerHTML = "Temperature: " + dict.tempFaren + "°F";
        feelsDisp.innerHTML = "Feels Like: " + dict.feelsLikeFaren + "°F";
    }

    lowerContent.appendChild(weatherDisp);
    lowerContent.appendChild(humidityDisp);
    lowerContent.appendChild(tempDisp);
    lowerContent.appendChild(feelsDisp);

    lower.appendChild(lowerContent);

    if (dict.weather == "snow"){
        document.body.style.backgroundImage = "url('https://i2-prod.mirror.co.uk/incoming/article29321548.ece/ALTERNATES/n615/0_Winter-weather-Feb-19th-2022.jpg')";
    }else if (dict.weather == "cloudy"){
        document.body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/03/10/45/78/360_F_310457894_HIpFBaxSQxiptoVgx0y1o4ZGXyH92YO9.jpg')";
    }else if (dict.weather == "rain"){
        document.body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/thumbnails/042/146/565/small/ai-generated-beautiful-rain-day-view-photo.jpg')";
    }else if (dict.weather == "fog"){
        document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Fog_in_Wawayanda_State_Park_01.jpg/1200px-Fog_in_Wawayanda_State_Park_01.jpg')";
    }else if (dict.weather == "wind"){
        document.body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/04/99/96/18/360_F_499961849_RTPjXHECUHBi4X9ZrpVTxb30Esx0bvIq.jpg')";
    }else if (dict.weather == "partly-cloudy-day"){
        document.body.style.backgroundImage = "url('https://s7d2.scene7.com/is/image/TWCNews/r_partly-cloudy_skypng-112')";
    }else if (dict.weather == "partly-cloudy-night"){
        document.body.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/bright-moon-shining-partly-cloudy-night-sky-clear-weather-tranquil-evening-335083255.jpg')";
    }else if (dict.weather == "clear-day"){
        document.body.style.backgroundImage = "url('https://st2.depositphotos.com/3542901/5357/i/450/depositphotos_53572111-stock-photo-image-clear-sky-day-time.jpg')";
    }else if (dict.weather == "clear-night"){
        document.body.style.backgroundImage = "url('https://img.freepik.com/free-photo/panoramic-view-sunset_23-2148933766.jpg')";
    }
}

searchBtn.addEventListener('click', dict);

resetBtn.addEventListener('click',() => {
    const pastLowerContent = document.querySelector('.lowerContent');
    
    if(pastLowerContent){
        lower.innerHTML = "";
    }

    document.body.style.backgroundImage = "none";
})