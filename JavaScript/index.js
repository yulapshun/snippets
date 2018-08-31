/**
 * Add `symbol` as to the left of `str` so that the length of the
 * returned string is at least `length`.
 * @param {string} str - The string to add left padding with
 * @param {integer} length - The minimum length of the resultant string
 * @param {string} symbol - The symbol to be used as padding
 */
const leftPadding = function(str, length, symbol) {
  if (symbol === undefined) {
    symbol = '0';
  }
  symbol = symbol.toString();
  str = str.toString();
  return symbol.repeat(length).slice(str.length) + str;
};


/**
 * Turn a number into currency format
 * (with commas for every 3 digits and fixed decimal place)
 * returned the formatted number as a string
 * modified from https://stackoverflow.com/a/149099
 * @param {number} n - The number to be formatted
 * @param {integer} c - Number of decimal place, default to be 3
 * @param {string} d - The symbol to be use as decimal point, default to be "."
 * @param {string} t - The symbol used to separate 3 digits, default to be ","
 */
const currencyFormat = function(n, c, d, t) {
  if (typeof d === 'undefined') {
    d = '.';
  }
  if (typeof t === 'undefined') {
    t = ',';
  }
  let s = n < 0 ? "-" : "",
      i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c), 10)),
      j = i.length;
  j = j > 3 ? j % 3 : 0;
  c = Math.abs(c);
  c = isNaN(c) ? 2 : c;
  return (
    s
      + (j ? i.substr(0, j) + t : "")
      + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t)
      + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "")
  );
};

/**
 * Turn an object into query string
 * @param {object} obj - The object to be converted
 */
const objectToQueryString = (obj) => {
  var paramList = [];
  for (var key in obj) {
    const value = obj[key];
    paramList.push(key + '=' + value);
  }
  return paramList.join('&');
};

module.exports = {
  leftPadding: leftPadding,
  currencyFormat: currencyFormat,
  objectToQueryString: objectToQueryString
};
