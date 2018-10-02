const { chain, sample } = require("lodash");
const dictionary = require("./words-by-letter.json");

module.exports = function acro(dict, letters) {
    return chain(letters)
        .split('')
        .map(l => dict[l])
        .map(o => sample(o))
        .value();
}
