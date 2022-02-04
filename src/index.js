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
  
  let morseToWord = ''
  let words = ''
  for (let i = 0; i<expr.length; i=i+10){
    let word = expr.slice(i,i+10)
    let y = ''
    let morse = ''
    for (let i = 0; i<word.length; i=i+2){      
      if((+word[i]+word[i+1]) == '10'){
        morse = morse + '.'
      }else if((+word[i]+word[i+1]) == '11'){
        morse =morse + '-'
        }      
    }morseToWord = MORSE_TABLE[morse]
    //console.log(morseToWord)
    if (morseToWord == undefined){
      words  = words + ' '
    }else{
      words  = words + morseToWord
    }
  }
  return words
}
module.exports = {
    decode
}