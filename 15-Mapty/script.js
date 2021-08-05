"use strict";

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
    clicks = 0;

    constructor(coords, distance, duration) {
        this.coords = coords; // [latitude, longitude]
        this.distance = distance; // in km
        this.duration = duration; // in min
    }

    _setDescription() {
        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }

    click() {
        this.clicks++;
    }
}

class Running extends Workout {
    type = 'running';
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration); // init the "this" keyword
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();
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
        this._setDescription(); // called here to access the type field
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
    #mapZoomLevel = 15;
    #mapEvent;
    #workouts = [];

    // called on load
    constructor() {
        // Get user's position
        this._getPosition();
        
        // Get data from local storage
        this._getLocalStorage(); 

        // Event Listeners
        form.addEventListener("submit", this._newWorkout.bind(this)); // bind it to the app object we are using
        inputType.addEventListener('change', this._toggleElevationField); // no need to bind "this" since the method doesn't reference it
        containerWorkouts.addEventListener('click', this._moveToPopUp.bind(this));
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

        this.#map = L.map("map").setView(coords, this.#mapZoomLevel); // 'map' is the id tag in the HTML's empty div

        L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.#map);

        //* Handle clicks on map
        //? on is the method to use as an event listener
        this.#map.on("click", this._showForm.bind(this));

        this.#workouts.forEach(work => {
            this._renderWorkoutMarker(work); // won't work in the "getLocalStorage" method is run before the map is loaded
        });
    }

    _showForm(mapEv) {
        this.#mapEvent = mapEv;
        form.classList.remove("hidden");
        inputDistance.focus();
    }

    _hideForm() {
        form.style.display = 'none'; // hide it to skip animation
        form.classList.add("hidden");
        setTimeout(() => form.style.display = 'grid');
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
        // console.log(type);
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
        // console.log(workout);

        //? 6. render workout on map as marker
        this._renderWorkoutMarker(workout);

        //? 7. render workout on list
        this._renderWorkout(workout);
        // Display Marker
        // console.log(this.#mapEvent);
        
        //? 8. hide form + clear input fields
        this._hideForm();
        this._clearInputFields();

        //? 9. Set local storage to all workouts
        this._setLocalStorage();
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
            .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description} `)
            .openPopup();
    }

    _renderWorkout(workout) {
        let html = `
                <li class="workout workout--${workout.type}" data-id="${workout.id}">
                <h2 class="workout__title">${workout.description}</h2>
                <div class="workout__details">
                    <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
                    <span class="workout__value">${workout.distance}</span>
                    <span class="workout__unit">km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⏱</span>
                    <span class="workout__value">${workout.duration}</span>
                    <span class="workout__unit">min</span>
                </div>
        `;
        if(workout.type === 'running')
            html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.pace.toFixed(1)}</span>
                    <span class="workout__unit">min/km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">🦶🏼</span>
                    <span class="workout__value">${workout.cadence}</span>
                    <span class="workout__unit">spm</span>
                </div>
            `;
        if(workout.type === 'cycling')
            html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.speed.toFixed(1)}</span>
                    <span class="workout__unit">km/h</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⛰</span>
                    <span class="workout__value">${workout.elevationGain}</span>
                    <span class="workout__unit">spm</span>
                </div>
            `;
        form.insertAdjacentHTML('afterend', html);
    }

    _moveToPopUp(element) {
        const workoutElement = element.target.closest('.workout');
        // console.log(workoutElement);

        if(!workoutElement) return;

        const workout = this.#workouts.find((elem) => elem.id === workoutElement.dataset.id);
        // console.log(workout);
        this.#map.setView(workout.coords, this.#mapZoomLevel, {animate: true, pan: {duration: 1}});

        // using the public interface
        // workout.click(); //* when we converted our data to local storage (strings) then brought them back, they lost their prototype chain
    }

    _setLocalStorage() {
        //? simple key value store (only use for small amount of data)
        localStorage.setItem('workouts', JSON.stringify(this.#workouts)); // convert our object into a string
    }

    _getLocalStorage() {
        const data = JSON.parse( localStorage.getItem('workouts'));
        // console.log(data);

        if(!data) return;

        this.#workouts = data;

        this.#workouts.forEach(work => {
            this._renderWorkout(work);
            // this._renderWorkoutMarker(work); // won't work since this method is run before the map is loaded
        });
    }

    reset() {
        localStorage.removeItem('workouts');
        location.reload();
    }
}

//? create the object using the class
const app = new App();
// app._getPosition(); // moved to inside the constructor so it is smoothly done on load