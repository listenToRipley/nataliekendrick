//find all the prime numbers up to a given number 
const sieveOfEratosthenes = (n) => {
  let primes = []

  for (let i = 0; i <= n; i++) {
    primes[i] = true;
  };

  primes[0] = false;
  primes[1] = false;

  //why start at 2? Because above, 0,1 are already marked as false. 
  //why sqrt? Because that is as high as well will need to go for checking primes. 
  for (let j = 2; j <= Math.sqrt(n); j++) {
    //k * j - since we don't need multiples of n
    for (let k = 2; k * j <= n; k++ ) {
      //as above, k * j are multiples below n and therefore cannot be prime. 
      primes[k * j] = false;  
    };
  };

  let results = []

  primes.forEach((bool, index) => {
    if (bool) results.push(index)
  });

  return results 
}; 

console.log(sieveOfEratosthenes(200))

export default sieveOfEratosthenes