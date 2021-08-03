"use strict";

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

//!-------------------------------------------------------------------
//! DATA STRUCTURE PLAN
class Workout {
    date = new Date();
    // unique identifier field
    id = (Date.now() + '').slice(-12); // normally you would use a library to handle the unique ids

    constructor(coords, distance, duration) {
        this.coords = coords; // [latitude, longitude]
        this.distance = distance; // in km
        this.duration = duration; // in min
    }
}

class Running extends Workout {
    type = 'running';
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration); // init the "this" keyword
        this.cadence = cadence;
        this.calcPace();
    }
    calcPace() {
        // min / km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}
class Cycling extends Workout {
    type = 'cycling';
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration); // init the "this" keyword
        this.elevationGain = elevationGain;
        this.calcSpeed();
    }

    calcSpeed() {
        //km/h
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

// const run1 = new Running([39, -90], 5.2, 24, 178);
// const cycle1 = new Cycling([39, -95], 5.2, 24, 178);
// console.log(run1, cycle1);

//!-------------------------------------------------------------------
//! APPLICATION ARCHITECTURE PLAN
class App {
    #map;
    #mapEvent;
    #workouts = [];

    // called on load
    constructor() {
        this._getPosition();

        // Event Listeners
        form.addEventListener("submit", this._newWorkout.bind(this)); // bind it to the app object we are using
        inputType.addEventListener('change', this._toggleElevationField); // no need to bind "this" since the method doesn't reference it
    }

    _getPosition() {
        if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () => alert("Could not get your position"));
    }

    _loadMap(position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        // console.log(latitude, longitude);

        const coords = [latitude, longitude];

        this.#map = L.map("map").setView(coords, 15); // 'map' is the id tag in the HTML's empty div

        L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.#map);

        //* Handle clicks on map
        //? on is the method to use as an event listener
        this.#map.on("click", this._showForm.bind(this));
    }

    _showForm(mapEv) {
        this.#mapEvent = mapEv;
        form.classList.remove("hidden");
        inputDistance.focus();
    }

    _toggleElevationField(event) {
        event.preventDefault();
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(event) {
        //? small helper functions
        const validInputs = (...inputs) => inputs.every(num => Number.isFinite(num)); // only returns true if every is true
        const allPositive = (...inputs) => inputs.every(num => num > 0);

        event.preventDefault();
    
        //? 1. get data from form
        const type = inputType.value;
        console.log(type);
        const distance = +inputDistance.value; // comes in as string so convert to number
        const duration = +inputDuration.value;
        const { lat, lng } = this.#mapEvent.latlng;
        let workout;

        //? 3. if running -> create running object
        if(type === 'running') {
            const cadence = +inputCadence.value;
            //? 2. check if data is valid (using a guard clause)
            if(!validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence)) return alert('Inputs have to be positive numbers!');

            workout = new Running([lat, lng], distance, duration, cadence);
        }
        //? 4. if cycling -> create cycling object
        if(type === 'cycling') {
            const elevation = +inputElevation.value;
            //? 2. check if data is valid
            if(!validInputs(distance, duration, elevation) || !allPositive(distance, duration)) return alert('Inputs have to be positive numbers!');

            workout = new Cycling([lat, lng], distance, duration, elevation);
        }
        //? 5. add new object to workout array
        this.#workouts.push(workout);
        console.log(workout);

        //? 6. render workout on map as marker
        this._renderWorkoutMarker(workout);

        //? 7. render workout on list
        
        // Display Marker
        // console.log(this.#mapEvent);
        
        
        //? 8. hide form + clear input fields
        this._clearInputFields();
    }

    _clearInputFields() {
        inputCadence.value = '';
        inputDistance.value = '';
        inputDuration.value = '';
        inputElevation.value = '';
    }

    _renderWorkoutMarker(workout) {
        L.marker(workout.coords)
        .addTo(this.#map)
        .bindPopup(
            L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: `${workout.type}-popup`,
            })
            )
            .setPopupContent(String(workout.distance))
            .openPopup();
    }
}

//? create the object using the class
const app = new App();
// app._getPosition(); // moved to inside the constructor so it is smoothly done on load

