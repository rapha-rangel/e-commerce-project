export const windowSizeHandler = () => {
  console.log(window.innerWidth)
  if(window.innerWidth >= 1439){
    return 6
  } else 
  if(window.innerWidth >= 768){
    return 5
  } else
  if(window.innerWidth >= 550){
    return 4
  } else{
    return 2
  }
}

export const calcShipping = (cep)=>{
  switch(cep){
    case "RJ":
    case "SP":
    case "MG":
      return "Gratis"
      break;
    case "BA":
    case "CE":
    case "ES":
    case "AL":
      return 10
      break;
    case "PR":
    case "SC":
    case "RS":
      return 5
      break;
    default:
      return 0
  }
}

export const toFixedNum =(num)=>{
  return num.toFixed(2)
}

