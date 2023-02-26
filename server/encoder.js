module.exports = function encoder(s) {
  let encodedString = "";

  for (let i = 0; i < s.length; i++) {
    let count = 1;

    while (i + 1 < s.length && s.charAt(i) === s.charAt(i + 1)) {
      i++;
      count++;
    }
    encodedString += s.charAt(i) + "" + count;
  }

  return encodedString;
};
