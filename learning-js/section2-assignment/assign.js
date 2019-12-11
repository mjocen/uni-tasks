// question 1

function reverse(s) {
    var result = "";
    for(var i=(s.length - 1); i>-1; i--) {
        result += s[i]
    }
    return result;
}


// question 2
var objRadius = [{radius: 5}, {radius: 9}, {radius: 2}];

function radius_compare(a, b) {
    return (a["radius"] - b["radius"]);
}

function display(num) {
    return objRadius.sort(radius_compare);
}


// question 3
function length_of_array(arr) {
    return arr.length - 1;
}

var test_array = [1,2,3,4,5,6,7,8]
function display_array() {
    console.log(test_array);
    console.log(test_array[test_array.length]);
    console.log(test_array[test_array.length - 1]);
}