	
// Check for Armstrong Number: Determine if a number is an Armstrong number.

  function armstrong(num){
    const str = num.toString();
    const numDigits = str.length;
    let sum = 0;


    for(let i =0;i<numDigits;i++){
        sum +=Math.pow(Number(str[i]),numDigits);
    }

    return sum===num;
  }

  const number =123;
  if(armstrong(number)){
    console.log(`${number} is an armstrong number`);
  } else{
    console.log(`${number} is not an armstrong number`);
  }