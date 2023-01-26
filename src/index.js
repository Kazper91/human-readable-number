module.exports = function toReadable (number) {
   
    let toString = String(number);
    let numberOf = toString.length;
    let result;
    let digitOne;
    let digitTwo;
    let digitThree;

    if (numberOf == 1) {
        let single = +toString;
        switch (single) {
            case 0: result = 'zero'; break;
            case 1: result = 'one'; break;
            case 2: result = 'two'; break;
            case 3: result = 'three'; break;
            case 4: result = 'four'; break;
            case 5: result = 'five'; break;
            case 6: result = 'six'; break;
            case 7: result = 'seven'; break;
            case 8: result = 'eight'; break;
            case 9: result = 'nine'; break;
        }

    } else if (numberOf == 2) {
        let dozens = +toString[0];
        let ones = +toString[1];

        switch (ones) {
            case 0: digitOne = ''; break;
            case 1: digitOne = ' one'; break;
            case 2: digitOne = ' two'; break;
            case 3: digitOne = ' three'; break;
            case 4: digitOne = ' four'; break;
            case 5: digitOne = ' five'; break;
            case 6: digitOne = ' six'; break;
            case 7: digitOne = ' seven'; break;
            case 8: digitOne = ' eight'; break;
            case 9: digitOne = ' nine'; break;
        }
        switch (dozens) {
            case 0: result = ''+digitOne; break;
            case 1: switch (ones) {
                    case 1: result = 'eleven'; break;
                    case 2: result = 'twelve'; break;
                    case 3: result = 'thirteen'; break;
                    case 4: result = 'fourteen'; break;
                    case 5: result = 'fifteen'; break;
                    case 6: result = 'sixteen'; break;
                    case 7: result = 'seventeen'; break;
                    case 8: result = 'eighteen'; break;
                    case 9: result = 'nineteen'; break;
                    case 0: result = 'ten'; break;
                    } break;
            case 2: result = 'twenty'+digitOne; break;
            case 3: result = 'thirty'+digitOne; break;
            case 4: result = 'forty'+digitOne; break;
            case 5: result = 'fifty'+digitOne; break;
            case 6: result = 'sixty'+digitOne; break;
            case 7: result = 'seventy'+digitOne; break;
            case 8: result = 'eighty'+digitOne; break;
            case 9: result = 'ninety'+digitOne; break;
        }

    } else if (numberOf == 3) {
        let hundreds = +toString[0];
        let dozens = +toString[1];
        let ones = +toString[2];

        switch (hundreds) {
            case 0: digitThree = ''; break;
            case 1: digitThree = 'one hundred'; break;
            case 2: digitThree = 'two hundred'; break;
            case 3: digitThree = 'three hundred'; break;
            case 4: digitThree = 'four hundred'; break;
            case 5: digitThree = 'five hundred'; break;
            case 6: digitThree = 'six hundred'; break;
            case 7: digitThree = 'seven hundred'; break;
            case 8: digitThree = 'eight hundred'; break;
            case 9: digitThree = 'nine hundred'; break;
        }
        switch (ones) {
            case 0: digitOne = ''; break;
            case 1: digitOne = ' one'; break;
            case 2: digitOne = ' two'; break;
            case 3: digitOne = ' three'; break;
            case 4: digitOne = ' four'; break;
            case 5: digitOne = ' five'; break;
            case 6: digitOne = ' six'; break;
            case 7: digitOne = ' seven'; break;
            case 8: digitOne = ' eight'; break;
            case 9: digitOne = ' nine'; break;
        }
        switch (dozens) {
            case 0: result = digitThree+digitOne; break;
            case 1: switch (ones) {
                    case 1: result = digitThree+' eleven'; break;
                    case 2: result = digitThree+' twelve'; break;
                    case 3: result = digitThree+' thirteen'; break;
                    case 4: result = digitThree+' fourteen'; break;
                    case 5: result = digitThree+' fifteen'; break;
                    case 6: result = digitThree+' sixteen'; break;
                    case 7: result = digitThree+' seventeen'; break;
                    case 8: result = digitThree+' eighteen'; break;
                    case 9: result = digitThree+' nineteen'; break;
                    case 0: result = digitThree+' ten'; break;
                    } break;
            case 2: digitTwo = ' twenty'; result = digitThree+digitTwo+digitOne; break;
            case 3: digitTwo = ' thirty'; result = digitThree+digitTwo+digitOne; break;
            case 4: digitTwo = ' forty'; result = digitThree+digitTwo+digitOne; break;
            case 5: digitTwo = ' fifty'; result = digitThree+digitTwo+digitOne; break;
            case 6: digitTwo = ' sixty'; result = digitThree+digitTwo+digitOne; break;
            case 7: digitTwo = ' seventy'; result = digitThree+digitTwo+digitOne; break;
            case 8: digitTwo = ' eighty'; result = digitThree+digitTwo+digitOne; break;
            case 9: digitTwo = ' ninety'; result = digitThree+digitTwo+digitOne; break;
        }
    } 
    return result;
}