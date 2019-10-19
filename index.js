
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Parameters should be numbers';
  }
  if (a === undefined || b === undefined) {
    return 'Both parameters should be present';
  }
  return a + b;
}


console.log(sum(1, 2));
