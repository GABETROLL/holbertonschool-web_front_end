function countPrimeNumbers() {
    return 25;
}

const before = performance.now();
countPrimeNumbers();
const after = performance.now();

const timeUsed = after - before;

console.log('Execution time of printing countPrimeNumbers was ' + timeUsed + ' milliseconds.');
