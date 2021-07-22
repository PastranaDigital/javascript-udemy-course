"use strict";

//? task 1
const poll = {
    question: 'What is your favorite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0), // creates [0,0,0,0]
    registerNewAnswer() {
        let input = NaN;
        
        while (!(input >= 0 && input < 4)) {
            // input = prompt('What is your favourite programming language? \n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++ \n (Write option number)');
            //! solution 
            input = prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`);
            
            // console.log(typeof input, input);
            input = Number(input);
        } 
        this.answers[input] += 1;
        
        //! solution
        // since the only thing we want to do is a single command if all this is true, then we use the short circuit method
        // typeof input === 'number' && answer < this.answers.length && this.answers[answer]++;

        //? task 4
        this.displayResults('string');
        // console.log(poll.answers);
    },


    //! solution for task 3
    displayResults(type = 'array') { // user is selecting what format they see the results in
        if(type === 'array') {
            console.log(this.answers);
        } else if(type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
        
};

// console.log(poll.answers);

// poll.registerNewAnswer();


//? task 2
document.querySelector('.poll').addEventListener("click", poll.registerNewAnswer.bind(poll));


//? task 3 
//! should be inside of poll object
// const displayResults = function(type = []) {
//     // console.log(typeof type, type);
//     if(typeof type == 'object') {
//         console.log(`Poll results are ${[...type]}`);
//         console.log(type);
//     }
//     if(typeof type == 'string') {
//         console.log(`Poll results are ${type}`);
//     }
    
// };


// displayResults([1,3,5,4]);
// displayResults('1,4,2,6');


//! task 5 BONUS
const shortArray = [5,2,3];
const longArray = [1,3,4,2,6,7];

//? we are resassigning the "this.answers" so we have to send an object with that keyword and value
poll.displayResults.call({answers: [5,2,3]});
poll.displayResults.call({answers: longArray}, 'string');
