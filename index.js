function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

const drivers = ['Alice', 'Bob', 'Charlie', 'David'];
console.log(findMatching(drivers, 'alice'));
console.log(findMatching(drivers, 'Bob')); 
console.log(findMatching(drivers, 'Charlie')); 
console.log(findMatching(drivers, 'Eve')); 

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

console.log(fuzzyMatch(drivers, 'a')); 
console.log(fuzzyMatch(drivers, 'B'));  
console.log(fuzzyMatch(drivers, 'c')); 
console.log(fuzzyMatch(drivers, 'e'));

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}

const driver = [
    { name: 'Alice'},
    { name: 'Bob'},
    { name: 'Charlie'},
    { name: 'Eve'}
];

console.log(matchName(drivers, 'Alice'));
console.log(matchName(drivers, 'Bob'));
console.log(matchName(drivers, 'Eve')); 