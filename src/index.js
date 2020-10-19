const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr = expr.toString().match(/.{1,10}/g);
    let result = "";

    expr.forEach(symbolCode => {
      if (symbolCode === "**********") {
        result = result + " ";
      } else {
        let charCode = "",
            chunkedCode = symbolCode.toString().match(/.{1,2}/g);
        for (let i = 0; i < chunkedCode.length; i++) {
          if (chunkedCode[i] === '00') {
            continue;
          } else if (chunkedCode[i] === '10') {
            charCode = charCode + ".";
          } else if (chunkedCode[i] === '11') {
            charCode = charCode + "-";
          }
        }
        result = result + MORSE_TABLE[charCode];
      }
    });

    return result;
}

module.exports = {
    decode
}