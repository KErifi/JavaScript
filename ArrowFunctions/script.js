// 1
const transformArray = (arr) => {
    return arr.map(num => {
        return num ** 2;
    });
};

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = transformArray(numbers);

console.log(squaredNumbers);

// 2
const myObject = {
    name: "Кристина",
    showName: function() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};

myObject.showName();

// 3
const applyFunctionToArray = (fn, arr) => {
    return arr.map(element => fn(element));
};

const double = num => num * 2;

const values = [1, 2, 3, 4, 5];
const doubledValues = applyFunctionToArray(double, values);

console.log(doubledValues);