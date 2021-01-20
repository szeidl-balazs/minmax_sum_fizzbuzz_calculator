class HECMAthlon {

    greaterValues = [];

    constructor(inputArr) {
        this.greaterValues = inputArr;
    }
    
    getMaxValue(input) {
        
        return input.split(',').reduce((acc, value) => [Math.max(acc, value)]);
    }
    
    
    getGreaterThan = input => {
        return this.greaterValues.filter(greaterNums => greaterNums >= input);
    }

    fizzBuzz = input => {
        let numberArr = Array(parseInt(input)).fill().map((_, i) => i+1);
        return numberArr.map(x => x % 3 === 0 && x % 5 === 0 
            ? "FizzBuzz" 
            : x % 3 === 0 ? "Fizz" : x % 5 === 0 ? "Buzz" : x);
    }
    
     
}

export default HECMAthlon;
