let getMeTheSum = (num, exponent) =>{
    let value = BigInt(Math.pow(num, exponent))
    
    let arrOfInts = []
  
    value = String(value)
  
    value = value.split("")
  
    for(let x = 0; x < value.length; x++){
  
      value[x] = parseInt(value[x])
  
      arrOfInts.push(value[x])
  
    }
  
    let sumOfInts = arrOfInts.reduce((a, b) => a + b, 0)
  
    return sumOfInts
  }
  
  getMeTheSum(2,1000)