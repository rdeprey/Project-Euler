/* Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
 */

var n = 0;
var sum = 0;

while (n < 1000) {
  if (n % 3 === 0 || n % 5 === 0) {
    sum += n;
  }

  n++;
}

var body = document.getElementsByTagName('body')[0];
var output = document.createElement('p');
output.innerHTML = 'The sum of all the multiples of 3 or 5 below 1000 is ' + sum +'.';
body.appendChild(output);