const sumAll = function(startVal, endVal) {
    if(startVal < 0 || endVal < 0 || !Number.isInteger(startVal) || !Number.isInteger(endVal) ) return "ERROR";
    
    let sum = 0;

    if(startVal < endVal){
        for(i = startVal; i <= endVal; i++){
            sum += i;
        }
    } else {
        for(i = endVal; i <= startVal; i++){
            sum += i;
        }   
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
