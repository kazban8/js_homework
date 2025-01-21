var testStrings = [
    "Wonderful",
    "Joyful",
    "Happiness",
    "Time",
    "Task",
    "Apple"
];

var regex = /^[^aA]{6,}$/;

var result = testStrings.filter(function(str) {
    return regex.test(str);
});

console.log(result);
