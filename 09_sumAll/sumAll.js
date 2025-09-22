const sumAll = function(min, max) {
     let sum = 0;
     for (let i = min; i <= max; i++) {
        sum += i;
     }
     return sum;
};

sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
// Do not edit below this line
module.exports = sumAll;
