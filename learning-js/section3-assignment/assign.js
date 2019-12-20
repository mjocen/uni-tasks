// question 1 - Write a function to find the largest string in an array of strings making use of the reduce function. You can, of course, do it using a loop, but see how short your code can be if you make use of the filter function.

function reduce_string(total, currentValue) {
    if (total.length > currentValue.length) { return total; }
    else {return currentValue; }
}

var arr_string = ["stupid", "dunno nothing", "you dumb"];

function display_reduce() {
    return arr_string.reduce(reduce_string);
}

// question 2 - Write a function that takes an array of numbers and returns the sum of squares of those numbers. E.g. if the array passed is [1, 2, 3] then the function should return 14.

function sum_of_squares(total, currentValue, currentIndex) {
    if(currentIndex == 0) { return Math.pow(total, 2) + Math.pow(currentValue, 2); }
    else {return total + Math.pow(currentValue, 2); }
}

var arr_nos = [1, 2, 5, 3, 4]
function display_sos() {
    console.log(arr_nos.reduce(sum_of_squares));
}

// question 3 - Write a function that takes an array of numbers as an argument and filters and returns the even numbers in them.

function filt_even(currentValue) {
    return currentValue % 2 == 0;
}

function display_even() {
    console.log(arr_nos.filter(filt_even));
}

// question 4 - Write a function that takes an array and a criteria function(for filtering) and returns the array of those elements which do not fulfill the criteria. The criteria function should take any element as argument and return a boolean value.

function arr_criteria(arr, criteria) {
    return arr.filter(function(i) {return !criteria(i)});
}

function display_judgment() {
    console.log(arr_criteria(arr_nos,filt_even));
}

var dict = {
    "errors": [
      {
        "code": "44005",
        "name": "DUPLICATE_ARTICLE_ID_ERROR",
        "message": "The merchant specified article_id of D4FZ00010178EXP00001 has been identified as a duplicate.  All article_id values submitted must be unique.  Please resubmit using a unique article_id for the item.",
        "field": "",
        "context": {
          "article_id": "D4FZ00010178EXP00001"
        }
      }
    ]}

async function blah() {
    var take;
    for (const err_obj of dict.errors) {
        console.log(err_obj.code + ": " + err_obj.name)
    }
}
