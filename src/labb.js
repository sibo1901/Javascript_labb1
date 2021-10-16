
// modifiera sum() tills testet blir godkänt!
function sum(a, b) {
    return a + b
}

function multiply(a, b) {
    return a * b
}

// denna måste exporteras längst ned i denna fil! annars kan labb.test.js inte importera den.
function isBelowZero(a) {
    return a < 0
}

function round(a) {
    return parseInt(a+0.5)
}

function addingUp(a) {
    let b = 0
    while(a > 0) {
        b = b + a
        a = a - 1
    }
    return b
}

function findMinMax(a) {
    const minMax = {
        max: Number.MIN_VALUE,
        min: Number.MAX_VALUE
    }

    a.forEach(element => {
        if(element < minMax.min)
        minMax.min = element
        if(element > minMax.max)
        minMax.max = element
    });

    return minMax
}

function afterXmasEve2020(a) {
    let xmas2020 = new Date(2020,11,24)
    let b = new Date(a)
    return b > xmas2020
}

function sortByStringLength (a) {
    a.sort(function(a,b) {
        return a.length - b.length
    });
    return a
}

function charCounter(a,b) {
    let count = 0;
    let bLower = b.toLowerCase()
    for (let i = 0; i < b.length; i++) {
        if(bLower.charAt(i) === a)
        count++
    }
    return count
}

function numbersOnly(a) {
    let b = []
    for (let i = 0; i < a.length; i++) {
        if(Number.isFinite(a[i]))
        //if(typeof a[i] === "number" && !isNaN(a[i]))
            b.push(a[i])
    }
    return b
}

function sortNumbers(a,b) {
    if(b===1) 
        a.sort(function(c,d) {
            return c - d
        })
    if(b===-1) {
        a.sort(function(c,d) {
            return d - c
        })
    }
    return a
}

function personFactory(a,b) {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    a = capitalizeFirstLetter(a)
    b = capitalizeFirstLetter(b)

    const person = {
        firstname: a,
        lastname: b,
        fullname: `${a} ${b}`,
        initials: `${a.charAt(0)}.${b.charAt(0)}`
    }
    return person
}

function doublePrice(a) {
    a.forEach(element => {
        element.price = element.price * 2
    });
    return a
}

function and(a,b) {
    //return a && b
    if(a===true)
        if(b===true)
            return true
    return false
}

function removeLeadingTrailing(a) {
    return parseFloat(a)
}

function getKeysAndValues(a){
    const keysandvalues = {
        keys: Object.keys(a),
        values: Object.values(a)
    }
    return keysandvalues
}

// fortsätt skapa alla lösningar som beskrivs i labb.test.js och exportera dem!


//etc...


// https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG how require and modules work in JavaScript
module.exports.sum = sum
module.exports.multiply = multiply
module.exports.isBelowZero = isBelowZero
module.exports.round = round
module.exports.addingUp = addingUp
module.exports.findMinMax = findMinMax
module.exports.afterXmasEve2020 = afterXmasEve2020
module.exports.sortByStringLength = sortByStringLength
module.exports.charCounter = charCounter
module.exports.numbersOnly = numbersOnly
module.exports.sortNumbers = sortNumbers
module.exports.personFactory = personFactory
module.exports.doublePrice = doublePrice
module.exports.and = and
module.exports.removeLeadingTrailing = removeLeadingTrailing
module.exports.getKeysAndValues = getKeysAndValues
