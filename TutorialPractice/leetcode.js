function createCounter(n) {
    let count = n;
  
    return function() {
      const currentValue = count;
      count += 1;
      return currentValue;
    };
  }
  
  function testCounter(n, calls) {
    const counter = createCounter(n);
    const results = [];
  
    for (let i = 0; i < calls.length; i++) {
      const callResult = counter();
      results.push(callResult);
    }
  
    return results;
  }
  
  // Example 1
  const example1 = testCounter(10, 3);
  console.log('Example 1:', example1); // Output: [10, 11, 12]
  
  // Example 2
  const example2 = testCounter(-2, 5);
  console.log('Example 2:', example2); // Output: [-2, -1, 0, 1, 2]
  