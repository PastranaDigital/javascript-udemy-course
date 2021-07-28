'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////


// Data
const account1 = {
    owner: 'Emily Pastrana',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  
    movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-01-28T09:15:04.904Z',
      '2020-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2021-07-24T17:01:17.194Z',
      '2021-07-27T03:36:17.929Z',
      '2021-07-28T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
  };
  
  const account2 = {
    owner: 'Omar Andre Pastrana',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
  };
  
  const account3 = {
    owner: 'Eva Mae Pastrana',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 8888,
  
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-07-26T12:01:20.894Z',
    ],
    currency: 'EUR',
    locale: 'en-GB',
  };
  
  const account4 = {
    owner: 'Gabriel Andre Pastrana',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 5555,
  
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-07-26T12:01:20.894Z',
    ],
    currency: 'EUR',
    locale: 'de-DE',
  };
  
  const accounts = [account1, account2, account3, account4];
  
  // Elements
  const labelWelcome = document.querySelector('.welcome');
  const labelDate = document.querySelector('.date');
  const labelBalance = document.querySelector('.balance__value');
  const labelSumIn = document.querySelector('.summary__value--in');
  const labelSumOut = document.querySelector('.summary__value--out');
  const labelSumInterest = document.querySelector('.summary__value--interest');
  const labelTimer = document.querySelector('.timer');
  
  const containerApp = document.querySelector('.app');
  const containerMovements = document.querySelector('.movements');
  
  const btnLogin = document.querySelector('.login__btn');
  const btnTransfer = document.querySelector('.form__btn--transfer');
  const btnLoan = document.querySelector('.form__btn--loan');
  const btnClose = document.querySelector('.form__btn--close');
  const btnSort = document.querySelector('.btn--sort');
  
  const inputLoginUsername = document.querySelector('.login__input--user');
  const inputLoginPin = document.querySelector('.login__input--pin');
  const inputTransferTo = document.querySelector('.form__input--to');
  const inputTransferAmount = document.querySelector('.form__input--amount');
  const inputLoanAmount = document.querySelector('.form__input--loan-amount');
  const inputCloseUsername = document.querySelector('.form__input--user');
  const inputClosePin = document.querySelector('.form__input--pin');
  
  ///////////////////////////////////////////////////////////
  // Functions

  const formatMovementDate = function(date, locale) {
    const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

    const daysPassed = calcDaysPassed(new Date(), date);

    if(daysPassed === 0) return 'Today';
    if(daysPassed === 1) return 'Yesterday';
    if(daysPassed <= 7) return `${daysPassed} days ago`;
    else {
      // const day = `${date.getDate()}`.padStart(2, 0);
      // const month = `${date.getMonth() +1}`.padStart(2, 0);
      // const year = date.getFullYear();
      // return `${day}/${month}/${year}`;
      
      return new Intl.DateTimeFormat(locale).format(date);

    }
  }

  
  //! Creating DOM elements
  //? instead of using global variables, pass the data the function needs into the function
  const DisplayMovements = function(acc, sort = false) {
    
    //? using textContent will just get the stuff between tags
    // containerMovements.textContent = 'textContent';
    
    //? wipes out the existing content in the movements container
    containerMovements.innerHTML = '';
  
    //? slice will let us copy the array
    //? we are doing ASC because we are displaying from the bottom to top
    const movs = sort ? acc.movements.slice().sort((a,b) => a - b) : acc.movements;
    
    // iterating through the information like in a LWC template for:each
    movs.forEach(function(mov, i) {
      
      const type = mov > 0 ? 'deposit' : 'withdrawal';

      const date = new Date(acc.movementsDates[i]);
      const displayDate = formatMovementDate(date, acc.locale);

      const html = `
          <div class="movements__row">
            <div class="movements__type movements__type--${type}">
              ${i + 1} ${type}
            </div>
            <div class="movements__date">${displayDate}</div>
            <div class="movements__value">${mov.toFixed(2)}</div>
          </div>
      `;
      // MDN has great visual of how this works
      containerMovements.insertAdjacentHTML('afterbegin', html);
      //? we chose 'afterbegin' to reverse the order that it is displayed
  
    });
  }
  // DisplayMovements(account1.movements)
  
  
  //! Computing User names (using Map)
  const createUsernames = function (accountsArray) {
    //? used forEach because we do not need a new array, only modify existing
    accountsArray.forEach((account) => 
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join(''));
  };
  createUsernames(accounts);
  // console.log(accounts);
  // console.log(createUsernames('Steven Thomas Williams'));
  
  const calcDisplayBalance = function(account) {
    account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.innerHTML = `${account.balance.toFixed(2)}€`;
  };
  // calcDisplayBalance(account1);
  
  
  //! Chaining Methods
  const calcDisplaySummaries = function (account) {
    const inMovements = account.movements
      .filter((mov) => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${inMovements.toFixed(2)}€`;
    const outMovements = account.movements
      .filter((mov) => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(outMovements).toFixed(2)}€`;
    const interest = account.movements
      .filter((mov) => mov > 0)
      .map(deposit => deposit * account.interestRate/100)
      .filter((int, i, arr) => {
        // console.log(arr);
        return int >= 1;
      })
      .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest.toFixed(2)}€`;
  };
  // calcDisplaySummaries(account1.movements);
  

  const updateUI = function (acc) {
    // Display movements
    DisplayMovements(acc);
    // Display balance
    calcDisplayBalance(acc);
    // Display summary
    calcDisplaySummaries(acc);
  };
  
  
  
  //! Implementing Login
  let currentAccount;

  // FAKE ALWAYS LOGGED IN---------------------------------------------------------------------
  currentAccount = account1;
  updateUI(currentAccount);
  containerApp.style.opacity = 100;
  // ------------------------------------------------------------------------------------------

  //? experimenting with API
  // const now = new Date();
  // const options = {
  //   day: 'numeric',
  //   // month: 'numeric',
  //   month: 'long', // 2-digit 
  //   year: 'numeric',
  //   weekday: 'long', // short || narrow
  //   hour: 'numeric',
  //   minute: 'numeric'
  // }
  // const locale = navigator.language;
  // console.log(locale);
  // labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);


  btnLogin.addEventListener('click', function (event) {
    // Prevent form from submitting or refreshing the page
    event.preventDefault();
    console.log('login');
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);
    //? ? = optional chaining
    if(currentAccount?.pin === Number(inputLoginPin.value)) {
      // Display UI and welcome
      labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
      containerApp.style.opacity = 100;
  
      // day/month/year
      // const now = new Date();
      // const day = `${now.getDate()}`.padStart(2, 0);
      // const month = `${now.getMonth() +1}`.padStart(2, 0);
      // const year = now.getFullYear();
      // const hour = `${now.getHours()}`.padStart(2, 0);
      // const min = `${now.getMinutes()}`.padStart(2, 0);
      // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

      const now = new Date();
      const options = {
        day: 'numeric',
        month: 'numeric',
        // month: 'long', // 2-digit 
        year: 'numeric',
        // weekday: 'long', // short || narrow
        hour: 'numeric',
        minute: 'numeric'
      }
      const locale = currentAccount.locale;
      console.log(locale);
      labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

      // clear input fields
      inputLoginUsername.value = inputLoginPin.value = '';
      // move cursor/focus
      inputLoginUsername.blur();
      inputLoginPin.blur();
  
      updateUI(currentAccount);
  
      console.log('LOGGED IN');
    } else {
      console.log('ERROR');
    }
  })
  
  //! Implementing Transfers
  // handle the click
  btnTransfer.addEventListener('click', function (event) {
    event.preventDefault();
    // input amount
    const amount = Number(inputTransferAmount.value);
    // input of receiving user
    const transferAccount = accounts.find(acc => acc.username === inputTransferTo.value);
    console.log(transferAccount);
  
    // clear input fields
    inputTransferTo.value = inputTransferAmount.value = '';
    // move cursor/focus
    inputTransferTo.blur();
    inputTransferAmount.blur();
  
    if(
      // if amount is viable
      amount > 0 && amount <= currentAccount.balance && 
      // check if transfer account exists
      transferAccount &&
      // user can't transfer to self
      transferAccount?.username !== currentAccount.username) {
        // add withdrawal to sender's array
        transferAccount.movements.push(amount);
        // add deposit to receiver's array
        currentAccount.movements.push(-amount);

        // add transfer dates
        currentAccount.movementsDates.push(new Date().toISOString());
        transferAccount.movementsDates.push(new Date().toISOString());
  
  
        updateUI(currentAccount);
    } else {
      console.log('ERROR');
    }
  })
  
  //! the find index method
  // closing an account using the splice method but you need the index to do this
  btnClose.addEventListener('click', function(event) {
    event.preventDefault();
  
    //? ? = optional chaining
    if(inputCloseUsername.value === currentAccount.username && currentAccount?.pin === Number(inputClosePin.value)) {
      // returns the index for the first match
      // indexOf only works for array values, not objects in arrays
      const index = accounts.findIndex(acc => acc.username === currentAccount.username);
  
      accounts.splice(index, 1); // this will mutate the actual array
    } else {
      console.log('error');
    }
  
    // clear input fields
    inputCloseUsername.value = inputClosePin.value = '';
    // move cursor/focus
    inputCloseUsername.blur();
    inputClosePin.blur();
  
    // Display UI and welcome
    labelWelcome.textContent = 'Log in to get started';
    containerApp.style.opacity = 0;
  })
   
  
  //! allow loan
  btnLoan.addEventListener('click', function(event) {
    event.preventDefault();
  
    const amount = Math.floor(inputLoanAmount.value); // rounding down
  
    if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
      // add positive movement
      currentAccount.movements.push(amount);
  
      // clear input fields
      inputLoanAmount.value = '';
      // move cursor/focus
      inputLoanAmount.blur();

      // add transfer dates
      currentAccount.movementsDates.push(new Date().toISOString());
  
      // Update UI
      updateUI(currentAccount);
    }
  })
  
  //! Sort action
  let sorted = false;
  btnSort.addEventListener('click', function(event) {
    event.preventDefault();
    DisplayMovements(currentAccount, !sorted);
    sorted ? btnSort.innerHTML = '&downarrow; SORT' : btnSort.textContent = 'BY DATE';
    sorted = !sorted;
  })


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// //! all Numbers are represented internally as floating decimal numbers
// console.log(23 === 23.0); // true
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// //? Conversion
// console.log(Number(23));
// console.log(+'23'); // Same

// //? Parsing
// console.log(Number.parseInt('30px', 10)); // must start with a number (10 = base 10)

// console.log(Number.parseFloat('2.5rem', 10));
// console.log(Number.parseInt('2.5rem', 10));

// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20px'));

// //? Best way to check if a value is a real number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));

// console.log(Number.isInteger(99));


// //! Math and Rounding Numbers
// console.log(Math.sqrt(25));
// console.log(25 ** (1/2)); // Same
// console.log(8 ** (1/3)); // cubed root

// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.max(5, 18, '23', 11, 2));
// console.log(Math.max(5, 18, '23px', 11, 2));

// console.log(Math.min(5, 18, 23, 11, 2));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min; // floor is better than trunc
// let randomArray = [];
// for (let index = 0; index < 100; index++) {
//   randomArray.push(randomInt(10,20));
// }
// randomArray.sort((a,b)=> a-b);
// const randomSet = new Set([...randomArray]);
// // console.log(randomArray);
// console.log(...randomSet);

// //? Rounding Integers
// console.log(Math.trunc(23.3));
// console.log(Math.round(23.3)); // 23
// console.log(Math.round(23.9)); // 24
// console.log(Math.ceil(23.3)); // 24
// console.log(Math.ceil(23.9)); // 24
// console.log(Math.floor(23.3)); // 23
// console.log(Math.floor(23.9)); // 23

// //? Rounding Integers
// console.log((2.7).toFixed(0)); // returns a string
// console.log((2.7).toFixed(3)); // returns a string
// console.log((2.875).toFixed(2)); // returns a string
// console.log(+(2.875).toFixed(2)); // returns a number


// //! The Remainder Operator
// console.log( 5 % 2); // 1
// console.log( 8 % 3); // 2

// //? check if even number
// console.log( 13 % 2); // odd
// console.log( 34 % 2); // even

// const isEven = (num) => num % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(11));

// labelBalance.addEventListener ('click', function() {
//   [...document.querySelectorAll('.movements__row')].forEach((element, i) => {
//     if (i % 2 === 0) element.style.backgroundColor = '#FFD681';
//   });
// })

// //! Working with BigInt (Big Integer)
// //? can't mix with other types
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(123456789123456789123456798123456);
// console.log(123456789123456789123456798123456n);
// console.log(BigInt(123564789));

// //? Operations
// console.log(100000n + 100000n);
// console.log(789456789456789456789456n * 10000000n);

// const huge = 456789132456789456123n;
// const num = 23;
// // console.log(huge * num);
// console.log(huge * BigInt(num));

// //? Exceptions
// console.log(20n > 15);
// console.log(20n === 15);
// console.log(typeof 20n);
// console.log(20n == '20');

// console.log(huge + ' is REALLY big!');

// //? Division
// console.log(12n / 3n);
// console.log(12n / 5n); // cuts off decimal
// console.log(10n / 3);


// //! Creating Dates
// //? Create a date
// const now = new Date();
// console.log(now);

// console.log(new Date('Jul 27 2021 16:27:55'));
// console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5)); // Nov 19
// console.log(new Date(2037, 10, 31)); // Dec 01

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days later

// //? Working with Dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear()); // Don't use getYear
// console.log(future.getMonth()); // Month is 0 based
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime()); // milliseconds that have passed since new Date(0);
// console.log(new Date(2142278580000));

// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);


//! Operations with Dates
//? when we try to convert a date into a number then it is converted to milliseconds from 
const future = new Date (2037,10,19,15,23);
console.log(+future);

const calcDaysPassed = (date1, date2) => Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
//? Moment .js is a library for time to use

const days1 = calcDaysPassed(new Date(2037,3,14), new Date(2037,3,4));
console.log(days1);