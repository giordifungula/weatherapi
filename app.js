let url = 'http://api.openweathermap.org/data/2.5/weather?q='
let city = 'Cape Town';
let apiKey = '&APPID=86a27a4898b55a8ae9484802eab3c73f';
let metric = '&units=metric';
// London,uk&APPID=86a27a4898b55a8ae9484802eab3c73f';

let api = url + city + apiKey + metric;

fetch(api)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    //   Creating a selecting Elements
    let content = document.getElementById('content');

    let cityContainer = document.createElement('div');
    cityContainer.setAttribute('class', 'citybox');

    let durbanContainer = document.createElement('div');
    durbanContainer.setAttribute('class', 'citybox');


    let capeTown = document.createElement('h1');
    capeTown.setAttribute('class', 'head');

    let durban = document.createElement('h1');
    durban.setAttribute('class', 'head');

    let icon = document.createElement('img');

    let temp = document.createElement('h3');
    temp.textContent = 'Temperature ';

    let windSpeed = document.createElement('h4');
    windSpeed.textContent = 'Wind Speed ';

    let desc = document.createElement('h5');
    desc.textContent = 'Description: ';

    let getTemp = data.main.temp;
    let getWind = data.wind.speed;
    let getDescp = data.weather[0].description;
    console.log(getDescp);
    // Create Citys and assign them
    // let capeTown = city.textContent = 'Cape Town';
    // let durban = city.textContent = 'Durban';
    let capeTownTemp = temp.textContent += getTemp + '° C' ;
    let capeTownWind = windSpeed.textContent += getWind + ' KM/h';
    let capeTownDescp = desc.textContent += getDescp;

    // Durban Content
    let durbanTemp = temp.textContent += getTemp + '° C' ;
    let dubanWind = windSpeed.textContent += getWind + ' KM/h';
    let durbanDesp = desc.textContent += getDescp;
    // console.log(capeTownDescp);

    let iconLocation = data.weather[0].icon
    

    icon.src = `http://openweathermap.org/img/w/${iconLocation}.png`;
    console.log(iconLocation);
    capeTown.textContent = 'Cape Town';
    durban.textContent = 'Durban';

    cityContainer.appendChild(capeTown);
    durbanContainer.appendChild(durban);
    durbanContainer.appendChild(temp);
    durbanContainer.appendChild(windSpeed);
    durbanContainer.appendChild(icon)

    cityContainer.appendChild(temp);
    cityContainer.appendChild(windSpeed);
    cityContainer.appendChild(desc);
    cityContainer.appendChild(icon);

    content.appendChild(cityContainer);
    content.appendChild(durbanContainer);
  });

