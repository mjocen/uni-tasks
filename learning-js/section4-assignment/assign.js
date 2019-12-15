// Write a constructor function to represent a Rectangle, which can calculate its area and perimeter.

function Rectangle(l, w) {
    this.length = l
    this.width = w
    this.area = function () {
        return this.length * this.width
    }
    this.perimeter = function () {
        return 2 * (this.length + this.width)
    }
}

function display_rec() {
    var rec = new Rectangle(5, 8)
    console.log("area: " + rec.area())
    console.log("perimeter: " + rec.perimeter())
}

// Write a Point function which takes x and y coordinates as arguments to define it. It should also be able to evaluate the distance from another point. We may make use of this exercise in a later assignment problem when dealing with the Document Object Model.

function Point(x, y) {
    this.x = x
    this.y = y
    this.distance = function(poi) {
        return Math.sqrt(Math.pow((poi.x - this.x), 2) + Math.pow((poi.y - this.y), 2))
    }
}

function display_point() {
    aaa = new Point(3, 2)
    bbb = new Point(5, 5)
    console.log(aaa.distance(bbb))
}

// Write javascript code so that we can check if a string object is a palindrome. E.g. "xyx".isPalindrome() should return true.

String.prototype.isPalindrome = function () {
    var i1 = 0
    var i2 = this.length - 1
    while (i2 > i1) {
        if (this[i1] != this[i2]) {
            return false
        }
        ++i1
        --i2
    }
    return true
}

function display_palindrome() {
    let test_pal = "notpalindrome"
    let test_you = "ekoke"
    console.log(test_pal.isPalindrome())
    console.log(test_you.isPalindrome())
}