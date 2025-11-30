const reverseString = function(word) {
    let wordReverse = word.split("");

    let reversedWord = wordReverse.reverse()
                                    .join("");

    return reversedWord;

};

// Do not edit below this line
module.exports = reverseString;
