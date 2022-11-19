let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Ralph) {
    cats.push(Ralph)
    return cats
}

function destructivelyPrependCat(Ralph) {
    cats.unshift(Ralph)
    return cats
}
function  destructivelyRemoveLastCat(Garfield) {
    cats.pop(Garfield)
    return cats
}
function  destructivelyRemoveFirstCat(Milo) {
    cats.shift(Milo)
    return cats
}
function appendCat(Ralph){
    var newArray = cats.slice();
    newArray.push(Ralph)
    return newArray
}
function prependCat(Ralph){
    var newArray = cats.slice();
    newArray.unshift(Ralph)
    return newArray
}
function removeLastCat(Ralph){
    var newArray = cats.slice();
    newArray.pop(Ralph)
    return newArray
}
function removeFirstCat(Ralph){
    var newArray = cats.slice();
    newArray.shift(Ralph)
    return newArray
}