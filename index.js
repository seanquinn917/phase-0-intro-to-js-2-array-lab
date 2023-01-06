// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
    return cats
};
function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats
};

function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return cats;
};

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    return cats;
};

function appendCat(name){
    const newCats = cats.slice()
    newCats.push(name)
    return newCats
}

function prependCat(name){
    const newCat = cats.slice()
    newCat.unshift(name)
    return newCat;
}

function removeLastCat(name){
    const catArray = cats.slice()
    catArray.pop(name)
    return catArray
}

function removeFirstCat(name){
    const firstCat = cats.slice()
    firstCat.shift(name)
    return firstCat;
}