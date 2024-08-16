//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function difference(n){
    sumofsquares = 0;
    sum = 0;
    for(let i = 1; i <= n; i++){
      sumofsquares += i**2;
      sum += i;
      
    }
    squareofsums = sum**2;
    console.log(squareofsums - sumofsquares);
  }
  
  difference(100);