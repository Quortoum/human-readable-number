module.exports = function toReadable (number) {
    const zero = 'zero';

    const zeroNineArr = ['','one','two','three','four',
  'five','six','seven','eight','nine'];

    const tenNineteenArr = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen',
  'seventeen','eighteen','nineteen'];

    const tensArr = ['twenty','thirty','forty','fifty',
  'sixty','seventy','eighty','ninety'];
  
    let numberToString = number.toString();

// *zero is on his own
    if(number === 0){ 
        return zero;
    }

// *from 1 to 9
    if (number < 10 && number > 0){ 
        return zeroNineArr[number];

// *from 10 to 19
    } else if ((number < 20) && (number > 9)){
        return tenNineteenArr[number - 10]; 

// * from 20 to 99
    } else if ((number < 100) && (number > 19)){
        if (numberToString[0] === '2'){  /*20-29    Если нулевой индекс переменой numberToString, которая принимает число 
                                        и переводит его в строку равен 2, 
                                        то берём массив с "десятками" tensArr[]  с 0 индексом (в котором лежит twenty) 
                                        и добавляем массив 1-9 zeroNineArr[] с индексом равным индексу 1  
                                        в переменной numberToString, которая принимает число 
                                         и переводит его в строку*/
            return (`${tensArr[0]} ${zeroNineArr[numberToString[1]]}`).trim();

        } else if (numberToString[0] === '3'){//30-39
            return (`${tensArr[1]} ${zeroNineArr[numberToString[1]]}`).trim();

        } else if (numberToString[0] === '4'){//40-49
            return (`${tensArr[2]} ${zeroNineArr[numberToString[1]]}`).trim();

        } else if (numberToString[0] === '5'){//50-59
            return (`${tensArr[3]} ${zeroNineArr[numberToString[1]]}`).trim();

        } else if (numberToString[0] === '6'){//60-69
            return (`${tensArr[4]} ${zeroNineArr[numberToString[1]]}`).trim();

        } else if (numberToString[0] === '7'){//70-79
            return (`${tensArr[5]} ${zeroNineArr[numberToString[1]]}`).trim();

        } else if (numberToString[0] === '8'){//80-89
            return (`${tensArr[6]} ${zeroNineArr[numberToString[1]]}`).trim();
            
        } else if (numberToString[0] === '9'){//90-99
            return (`${tensArr[7]} ${zeroNineArr[numberToString[1]]}`).trim();
        }

// * Hundreds
    } else if ((number < 1000) && (number > 99)){
        if((numberToString[1] === '0') && (numberToString[2] === '0')) {// from 110 to 
            return (`${zeroNineArr[numberToString[0]]} hundred`);
        } else {
            return (`${zeroNineArr[numberToString[0]]} hundred `);
        }
    }

  
    
return;
}


