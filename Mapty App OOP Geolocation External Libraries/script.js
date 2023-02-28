'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June',
 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout{
    date=new Date();
    id=(Date.now()+'').slice(-10);

    constructor(coords, distance, duration){
        //this.date=
        //this.id=
        this.coords=coords;
        this.distance=distance;
        this.duration=duration;
    }
}

class Runnning extends Workout{

    constructor(coords, distance, duration, cadence)
    {
        super(coords, distance,duration, cadence)
        this.cadence=cadence;
         this.calPace();
    }
    calPace(){
        this.pace=this.duration/ this.distance;
        return this.pace
    }
    
}


class Cycling extends Workout{
    constructor(coords,distance, duration, elevationGain ){
        super(coords, distance,duration, elevationGain)
            this.elevationGain=elevationGain;
            this.calcSpeed();
        }

    calcSpeed(){ 
        this.speed=this.distance/(this.duration/60);
        return this.speed;
    }
    }
    

const run1=new Runnning([39, -12],5.2, 24, 178)
const cycling1=new Cycling([39, -12],27,95,253);
console.log(run1, cycling1);

let map, mapEvent;


 
//Architecture of Classes
class App{
    constructor(){
        this._gerPosition();

    }
    _gerPosition(){
        if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(this._loadMap,

    function(){
        alert('Could not Get Your Position');
    }
    
);
    }
    _loadMap(position){
       
        {
            const {latitude}=position.coords;
            const {longitude}=position.coords;
            console.log(`https://www.google.co.in/maps/@${latitude},${longitude},
            15z?hl=en-GB`);
    
            const coords=[latitude, longitude];
    
            map = L.map('map').setView(coords, 13);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" >OpenStreetMap</a> contributors'
    }).addTo(map);
    
        map.on('click',function(mapE){
    
            mapEvent=mapE;
    
            map.on('click', function(mapEvents){
                form.classList.remove('hidden');
                inputDistance.focus();
            })
    //         console.log(mapEvent);
    //         const { lat, lng }= mapEvent.latlng;
    
    
    // L.marker([lat, lng])
    // .addTo(map)
    // .bindPopup(
    //     L.popup({
    //     maxWidth:250,
    //     minWidth:100,
    //     autoClose:false,
    //     closeOnClick:false,
    //     className: 'running-popup',
    // })
    // )
    // .setPopupContent('You are Here')
    // .openPopup();
    
        });
        }
    }
    _toogleElevationFiled(){}
    _newWorkout(){}
}

if(navigator.geolocation)
navigator.geolocation.getCurrentPosition(
    function(position)
    {
        const {latitude}=position.coords;
        const {longitude}=position.coords;
        console.log(`https://www.google.co.in/maps/@${latitude},${longitude},
        15z?hl=en-GB`);

        const coords=[latitude, longitude];

        map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" >OpenStreetMap</a> contributors'
}).addTo(map);

    map.on('click',function(mapE){

        mapEvent=mapE;

        map.on('click', function(mapEvents){
            form.classList.remove('hidden');
            inputDistance.focus();
        })
//         console.log(mapEvent);
//         const { lat, lng }= mapEvent.latlng;


// L.marker([lat, lng])
// .addTo(map)
// .bindPopup(
//     L.popup({
//     maxWidth:250,
//     minWidth:100,
//     autoClose:false,
//     closeOnClick:false,
//     className: 'running-popup',
// })
// )
// .setPopupContent('You are Here')
// .openPopup();

    });
    },
    function(){
        alert('Could not Get Your Position');
    }
    
);


// Here The Other Scripts Files Also order matters 

console.log(fullName);

form.addEventListener('click',function(e){
    e.preventDefault();



    // Clear input fields
    inputDistance.value=inputDuration.value=inputCadence.value=inputElevation.value='';



    //here Display The Marker

    console.log(mapEvent);
    const { lat, lng }= mapEvent.latlng;
    
    
    L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
        L.popup({
        maxWidth:250,
        minWidth:100,
        autoClose:false,
        closeOnClick:false,
        className: 'running-popup',
    })
    )
    .setPopupContent('You are Here')
    .openPopup();

});

inputType.addEventListener('change',function(){
    inputElevation.closest('.form_row').classList.toggle('form_row--hidden');
    inputCadence.closest('.form_row').classList.toggle('form_row--hidden');

});


// Lecture 239 is started 