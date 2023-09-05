// Same as exercise 9, but 100 times!
function countPrimeNumbers() {
    return 25;
}

const before = performance.now();

for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}

const after = performance.now();

const timeUsed = after - before;

console.log('Execution time of calculating prime numbers 100 times was ' + timeUsed + ' milliseconds.');
