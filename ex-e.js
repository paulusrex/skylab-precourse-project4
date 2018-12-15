let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function sayItWithWords(num) {
  if (num === 0) {
    return 'zero';
  } else if (num === 1000) {
    return 'one thousand';
  } else if (num <= 9) {
    return units[num];
  } else if (num <= 19) {
    return teens[num - 10];
  } else if (num >= 100) {
    let numHundreds = Math.floor(num / 100);
    let numRemainder = num % 100;
    return units[numHundreds] + ' hundred' + (numRemainder !== 0 ? ' ' + num(numRemainder) : '');
  } else if (num >= 100) {
    let numHundreds = Math.floor(num / 100);
    let numRemainder = num % 100;
    return units[numHundreds] + ' hundred' + (numRemainder !== 0 ? ' ' + num(numRemainder) : '');
  } else {
    let numTens = Math.floor(num / 10);
    let numUnits = num % 10;
    return tens[numTens] + (numUnits !== 0 ? '-' + units[numUnits] : '');
  }
}

for (let i = 0; i <= 100; i++) {
  console.log(i, sayItWithWords(i));
}