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

    let city = document.createElement('h1');

    let icon = document.createElement('img');

    let temp = document.createElement('h3');
    temp.textContent = 'Temperature';

    let windSpeed = document.createElement('h4');
    windSpeed.textContent = 'Wind Speed';

    let desc = document.createElement('h5');
    desc.textContent = 'Description';

    // Create Citys and assign them
    let capeTown = city.textContent = 'Cape Town';

    let iconLocation = data.weather[0].icon;
    

    icon.src = `http://openweathermap.org/img/w/${iconLocation}.png`;
    console.log(iconLocation);
    capeTown.textContent = 'Cape Town';

    cityContainer.appendChild(city);
    cityContainer.appendChild(temp);
    cityContainer.appendChild(windSpeed);
    cityContainer.appendChild(desc);
    cityContainer.appendChild(icon);
    content.appendChild(cityContainer);
  });

