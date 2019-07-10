const a = 50;
a = 60; // shows error. You cannot change the value of const.
const b = "Constant variable";
b = "Assigning new value"; // shows error.

// Return a promise which resolves after the specified interval
function delay(interval) {
    return new Promise(function (resolve) {
        setTimeout(resolve, interval);
    });
}

delay(1000)
    .then(function () {
        return 5;
    })
    .then(function (value) {
        console.log(value); // 5
    });