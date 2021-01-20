const hECMAthlon = {

    getMaxValue: function (input) {
        let maxValues = input.split(",");                   
        let maxValue = 0;
        for(let i = 0; i < maxValues.length; i++){
            let tempValue = parseInt(maxValues[i]);
            if (tempValue > maxValue) {
                maxValue = tempValue;
            }
        }
        return [maxValue];
    },

    getGreaterThan: function (input) {
        let greaterValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let greaterNums = [];
        for(let j = 0; j < greaterValues.length; j++) {
            if (greaterValues[j] > parseInt(input)) {
                greaterNums.push(greaterValues[j]);
            }
        }
        return greaterNums;
    },

    fizzBuzz: function (input) {
        let output = [];
        for (let k = 1; k <= parseInt(input); k++) {
            let value;
            if(k % 3 === 0) value = "Fizz";
            else if(k % 5 === 0) value = "Buzz";
            else if(k % 5 === 0 && k % 3 === 0) value = "FizzBuzz";
            else value = k;
            output.push(value);
        }
        return output;
    }
}

export default hECMAthlon;