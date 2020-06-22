/******************
 * YOUR CODE HERE *
 ******************/

const calculate = function (str1, str2,str3){
if (str3 === '+' || str3 === 'added to' || str3 === 'plus'){

  return Number(str1) + Number(str2)}   

else if (str3 === '-'|| str3 === 'subtracted from'||  str3 === 'minus'){

 return Number(str1) - Number(str2)


}

else if (str3 === 'X'|| str3 === 'multiplied by'||  str3 === 'x' || str3 === 'times'){

  return Number(str2) * Number(str1)
}
else if (str3 === '/'|| str3 === 'divided by'){

  return Number(str1) / Number(str2)}

else if (str3 === '%'|| str3 === 'mod'||  str3 === 'modulus'){

  return Number(str1) % Number(str2)
}
else return "Sorry, that's not a mathematical operation!"
}
/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;