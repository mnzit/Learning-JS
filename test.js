// Anonomous functions and closures

var next = (function () {
    counter = 0;
    return function () {
        return counter++;
    }
})();

console.log(next()); //0
console.log(next()); //1


var coll = ["Manjit", "Sandesh", "Kushal", "Rahil", "Niroj"];
var counter = 0;
var next = function () {
    return function () {
        if (counter < coll.length - 1) {
            counter++;
            return true;
        } else {
            counter = 0;
            return false;
        }
    }
}();

while (next()) {
    console.log(coll[counter]);
}
while (next()) {
    console.log(coll[counter]);
}




