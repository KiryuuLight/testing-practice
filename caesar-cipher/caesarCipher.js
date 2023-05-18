
const caesarCipher = (str,shift) => {
    if (shift > 25) return undefined;

    const shiftValue = (character) => {
       if (character.charCodeAt() + shift >= 122) 
            return String.fromCharCode(98 + ((character.charCodeAt() + shift) - 122))
       
       return String.fromCharCode(character.charCodeAt() + shift)
    }

    return str.toLowerCase().split('').map((value) => /[a-zA-Z]+/gi.test(value) ? shiftValue(value) : value).join('')
}


export default caesarCipher;