/**
 * Given a string, return the longest word inside that string,
 * you might encounter numbers and symbols in the string.
 */

function longestWord(sen) {
  return sen
    .match(/[a-z]+/gi)
    .reduce((item, next) => (item.length >= next.length ? item : next));
}

console.log(longestWord("fun&!! time")); // time
console.log(longestWord("I love dogs")); // love
