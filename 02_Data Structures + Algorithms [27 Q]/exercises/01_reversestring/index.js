// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  var strSplite = str.split("");
  var reverseStr = strSplite.reverse();
  var joinnig = reverseStr.join("");
  return joinnig;
}

module.exports = reverse;
