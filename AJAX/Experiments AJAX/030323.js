// 'use strict';

const btn = document.getElementById("btnx");
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>People</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>Voice</span>${data.languages[0].name}</p>
      <p class="country__row"><span>$$</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};



navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err=>console.error(err)
)


// console.log('Getting postions');

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     err=>reject(err)
        // ) 
        navigator.geolocation.getCurrentPosition(resolve,
            reject);
    });
};

//Geoloctaion api to A promise based API

getPosition().then(pos => console.log(pos));


const whereAmI = function () {
    getPosition().then(pos => {
        // console.log(pos.coords);
        const { latitude :lat,longitude :lng } = pos.coords;
        return fetch(`https://geocode.xyz/${lat} , ${lng}?geoit=json`);
    })
            .then(res => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
            return res.json();
        })
        .then(data => {
            console.log(data);
            console.log(`You are in ${data.city}, ${data.country}`);
            return fetch(`https://restcountries.eu/rest/v2/name${data.country}`);

        })
        .then(res => {
            if (!res.ok) throw new Error(`Country not found 
        (${res.status})`);
            
            return res.json();
        })
        .then(data => renderCountry(data[0]))
        .catch(err => console.error(`${err.message} *`));
    
};

// btn.addEventListener('click', whereAmI);


console.log(btn);
console.log(whereAmI);