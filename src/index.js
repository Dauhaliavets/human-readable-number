module.exports = function toReadable (number) {
    const numbers = {
        0: 'zero', 
        1: 'one', 
        2: 'two', 
        3: 'three', 
        4: 'four', 
        5: 'five', 
        6: 'six', 
        7: 'seven', 
        8: 'eight', 
        9: 'nine', 
        10: 'ten', 
        11: 'eleven', 
        12: 'twelve', 
        13: 'thirteen', 
        14: 'fourteen', 
        15: 'fifteen', 
        16: 'sixteen', 
        17: 'seventeen', 
        18: 'eighteen', 
        19: 'nineteen', 
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    };

    const length = number.toString().length;
    const [firstFromEnd, secondFromEnd, thirdFromEnd] = number.toString().split('').reverse();

    switch (length) {
        case 1:
            return `${numbers[+firstFromEnd]}`;

        case 2:
            if(+firstFromEnd === 0) {
                return numbers[+secondFromEnd * 10];
            }
            if(+secondFromEnd === 1) {
                return numbers[+(secondFromEnd + firstFromEnd)];
            }
            return `${numbers[+secondFromEnd * 10]} ${numbers[+firstFromEnd]}`;

        case 3:
            if(+firstFromEnd === 0 && +secondFromEnd === 0) {
                return `${numbers[+thirdFromEnd]} ${numbers[100]}`;
            }
            if(+secondFromEnd === 0) {
                return `${numbers[+thirdFromEnd]} ${numbers[100]} ${numbers[+firstFromEnd]}`;
            }
            if(+secondFromEnd === 1) {
                return `${numbers[+thirdFromEnd]} ${numbers[100]} ${numbers[+(secondFromEnd + firstFromEnd)]}`;
            }
            if(+secondFromEnd > 1 && +firstFromEnd === 0) {
                return `${numbers[+thirdFromEnd]} ${numbers[100]} ${numbers[+secondFromEnd * 10]}`;
            }
            return `${numbers[+thirdFromEnd]} ${numbers[100]} ${numbers[+secondFromEnd * 10]} ${numbers[+firstFromEnd]}`;

        default:
            break;
    }
}