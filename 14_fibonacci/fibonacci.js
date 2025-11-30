const fibonacci = function(num) {
    if(num < 0){
        return "OOPS";
    }
    let fibonacci = [0,1];
    while(num > fibonacci.length - 1){
        fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);
    }

    return fibonacci[+num];
    

};

// Do not edit below this line
module.exports = fibonacci;
