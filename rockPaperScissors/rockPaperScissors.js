/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Example:
*   [
*     [ // one possible three round game outcome
*       'rock',    // round 1
*       'paper',   // round 2
*       'scissors' // round 3
*     ],
*     [ // next possible three round game outcome
*       'rock',    // round 1
*       'paper',   // round 2
*       'rock'     // round 3
*     ],
*   etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (n) {
  var result  = [];
  var choices = ['rock', 'paper', 'scissors'];
  var previous;

  // base cases
  if ( n <= 0 ) return result;
  if ( n === 1 ) return [ ['rock'], ['paper'], ['scissors'] ];

  previous = rockPaperScissors(n - 1);

  // for each array in previous
  previous.forEach(function (array) {
    // for each choice in choices
    choices.forEach(function (choice) {
      // concatenate previous array with choice and push to result
      result.push( Array.prototype.concat( array, choice ) );
    });
  });

  return result;
};
