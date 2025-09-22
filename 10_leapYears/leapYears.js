const leapYears = (year) => {
    const isLeapYear = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isDivisibleByFourHundred = year % 400 === 0;
    return isLeapYear && (!isCentury || isDivisibleByFourHundred);
};

leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
// Do not edit below this line
module.exports = leapYears;
