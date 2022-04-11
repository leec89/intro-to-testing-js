// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
};

const sayHello = function(input) {
    var inputTest = typeof input;
    switch (inputTest) {
        case 'undefined':
            return 'Sorry, undefined not a string!';
            break
        case NaN:
            return 'Sorry, NaN not a string!';
            break;
        case 'number':
            return 'Sorry, \'number\' not a string!';
            break;
        case 'boolean':
            return 'Sorry, \'boolean\' not a string!';
            break;
        default:
            return "Hello, " + input + "!";
    }
}