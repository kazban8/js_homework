function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  } 
  
  function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;
  
    for (let i = 0; i < count; i++) {
      let randomNum = getRandomInt(100, 1000);
  
      if (randomNum % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;

    console.log("кількість згенерованих чисел " + count);
    console.log("парні числа " + evenCount);
    console.log("непарні числа " + oddCount);
    console.log("відсоток парних чисел " + evenPercentage.toFixed(2) + "%");
    console.log("відсоток непарних чисел " + oddPercentage.toFixed(2) + "%");
  }


  checkProbabilityTheory(1000);
  