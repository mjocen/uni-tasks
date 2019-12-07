// question 1
function is_integer(a) {
    return Number.isInteger(a);
}

//question 2
function add_all(b) {
    total = 0;
    b.forEach(x => {
        total += x;
    });
    return total;
}

// question 3
function ctof(c) {
    return ((c / 5) * 9) + 32;
}

function ftoc(f) {
    return ((f - 32) / 9) * 5;
}

//question 4
function range(start, end) {
    var ans = []
    for (let i = start; i <= end; i++){
        ans.push(i)
    }
    return ans;
}
function factorial(n) {
    var f_total = 0;
    range(1,n).forEach(elem => {
        if(elem == 1) {
            f_total = elem;
        } else {
            f_total *= elem;
        }
    });

    return f_total;
}

//question 5
function convert_to_coins(amount) {
    denominations = [25, 10, 5, 2, 1]
    
    denominations.forEach(elem => {
        checker = true
        while(checker) {
            if (amount - elem >= 0) {
                console.log(elem);
                amount -= elem;
            } else {
                checker = false;
            }
        }
    })
}