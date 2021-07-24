'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Emily Pastrana',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Omar Andre Pastrana',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Eva Mae Pastrana',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 8888,
};

const account4 = {
  owner: 'Gabriel Andre Pastrana',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 5555,
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


//! Creating DOM elements
//? instead of using global variables, pass the data the function needs into the function
const DisplayMovements = function(movements) {
  
  //? using textContent will just get the stuff between tags
  // containerMovements.textContent = 'textContent';
  
  //? wipes out the existing content in the movements container
  containerMovements.innerHTML = '';
  
  // iterating through the information like in a LWC template for:each
  movements.forEach(function(mov, i) {
    
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">
            ${i + 1} ${type}
          </div>
          <div class="movements__date">24/01/2037</div>
          <div class="movements__value">${mov}</div>
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

const calcDisplayBalance = function(movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.innerHTML = `${balance}€`;
};
// calcDisplayBalance(account1.movements);


//! Chaining Methods
const calcDisplaySummaries = function (account) {
  const inMovements = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${inMovements}€`;
  const outMovements = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outMovements)}€`;
  const interest = account.movements
    .filter((mov) => mov > 0)
    .map(deposit => deposit * account.interestRate/100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummaries(account1.movements);


//! Implementing Login
let currentAccount;
btnLogin.addEventListener('click', function (event) {
  // Prevent form from submitting
  event.preventDefault();
  console.log('login');
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);
  //? ? = optional chaining
  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // move cursor/focus
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // Display movements
    DisplayMovements(currentAccount.movements);
    // Display balance
    calcDisplayBalance(currentAccount.movements);
    // Display summary
    calcDisplaySummaries(currentAccount);
    console.log('LOGGED IN');
  } else {
    console.log('ERROR');
  }
})



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// //! Simple array methods

// let arr = ['a', 'b', 'c', 'd', 'e'];
// //? SLICE method = does not mutate original array
// console.log(arr.slice(2)); // returns a new array
// console.log(arr.slice(2, 4)); // end parameter is not included
// console.log(arr.slice(-1)); // takes last one
// console.log(arr.slice(1, -2)); // starts at index 1 and does not take last 2
// console.log(arr.slice()); // creates a shallow copy

// //? SPLICE method = makes edits to original
// // usually used to take away from an array
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2); // starting at index 1, remove 2 elements
// console.log(arr);

// //? REVERSE method = mutates the array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2);
// console.log(arr2.reverse());
// console.log(arr2);

// //? CONCAT method = does not mutate
// const letters = arr.concat(arr2);
// console.log(letters);
// // same as
// console.log([...arr, ...arr2]);

// //? JOIN
// console.log(letters.join(' - '));


// //! Looping over array (forEach)
// //? for of
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// //? forEach is a callback function
// movements.forEach(movement => {
//   movement > 0 ? console.log(`You deposited ${movement}`) : console.log(`You withdrew ${Math.abs(movement)}`);
// });

// //? what if we wanted a counter for the index of the array
// //? for of example
// console.log('for of');
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`[${i+1}] You deposited ${movement}`);
//   } else {
//     console.log(`[${i+1}] You withdrew ${Math.abs(movement)}`);
//   }
// }

// //? forEach example
// // forEach passes in the current element, index and the entire array we are looping (in that order)
// // names don't matter but the order does (current element, index, array)
// // can't use the arrow function in this way
// //? forEach cannot be broken out of like a for of
// console.log('forEach');
// movements.forEach(function (movement, index, array) {
//   movement > 0 ? console.log(`[${index+1}] You deposited ${movement}`) : console.log(`[${index+1}] You withdrew ${Math.abs(movement)}`);
// });

// //! forEach for Maps and Sets
// //? Maps
// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //? Sets
// const currenciesUnique = new Set(['USD', 'GBP', "USD", 'EUR', 'EUR']);
// console.log(currenciesUnique);
// // key & value are the same since the set is a unique list
// currenciesUnique.forEach(function (value, key, set) {
//   console.log(`${key}: ${value}`);
// });
// // you could use a "_" which is a JS throw away variable
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
// });

//! Data filters (map, filer & reduce)
//? Map = like the forEach but it makes a new array from it by doing an action to each element
//? Filter = only elements for which the condition is true will be included in the new array
//? Reduce = "reduces" all array elements down to one single value (ex: adding all elements together)

// //! the Map method
// //? uses a funciton to accomplish this
// const euroToUsd = 1.1;
// // const movementsUSD = movements.map(function(mov) {
// //   return mov * euroToUsd;
// // });
// //? Arrow function version                //? the return section
// const movementsUSD = movements.map(mov => mov * euroToUsd);
// console.log(movements, movementsUSD);

// //? other way of doing this using forEach
// const movementsUSDforEach = [];
// movements.forEach(function(element, index, array) {
//     movementsUSDforEach.push(element * euroToUsd);
// });
// console.log(movementsUSDforEach);
// //? another example
// const movementsDescription = movements.map((mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);

// console.log(movementsDescription);

// //! The Filter Method
// const deposits = movements.filter((mov) => mov > 0);
// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(movements, deposits, withdrawals);

// //! The Reduce Method
// // acc is like a snowball
// // no need for extra variables
// const balance = movements.reduce(function(acc, element, i, arr) {
//   return acc + element;
// }, 0);
// // ^ second value is where to start the accumulator

// const balanceArrow = movements.reduce((acc, element) => acc + element, 0);
// console.log(balanceArrow);

// //? another example - maximum value
// // best to use the first value in the array instead of 0 for this function
// const maxValue = movements.reduce((acc, element) => element > acc ? element : acc, movements[0]);
// console.log(maxValue);

// //! The magic of chaining methods
// const euroToUsd = 1.1;
// //? this works because filter and map return new arrays
// //? it is like a PIPELINE
// // const totalDepositUSD = movements
// //   .filter(mov => mov > 0)
// //   .map(mov => mov * euroToUsd)
// //   .reduce((acc, mov) => acc + mov, 0);
// //? re-written to use array parameter to debug as it builds
// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, array) => {
//     // console.log(array);
//     return mov * euroToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositUSD);

// //! find method
// //? does not make a new array but instead returns the first element that meets the condition
// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Emily Pastrana');
// console.log(account);